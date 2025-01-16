import { fetchProjects } from '~/lib/projects';
import { Toaster } from 'react-hot-toast';
import { useMedia } from 'react-use';
import { useMemo, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { colors } from '~/lib';
import { Layout } from '~/layouts';
import { Animate, ProjectList, Pill } from '~/components';
import { ListAction, ListActionType, Theme } from '~/types';

import type { GetStaticProps } from 'next';

import type { Project } from '~/types';

interface ProjectProps {
	stringifiedProjects: string;
}

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
	const projects = await fetchProjects();

	return {
		props: {
			stringifiedProjects: JSON.stringify(projects),
		},
		revalidate: 3600,
	};
};

async function fetchGitHubRepos(): Promise<Array<Project>> {
	const orgs = ['InfinityBotList', 'Infinity-Development'];
	const allRepos = await Promise.all(orgs.map(async (org) => {
		const response = await fetch(`https://api.github.com/orgs/${org}/repos`);
		return response.json();
	}));
	const combinedRepos = allRepos.flat();

	return combinedRepos.map((repo: any) => ({
		name: repo.name,
		description: repo.description || 'No description provided.',
		state: repo.archived ? 'archived' : repo.fork ? 'fork' : repo.is_template ? 'template' : 'open-source',
		private: repo.private,
		url: repo.html_url,
		icon: 'feather:github',
		homepage: repo.homepage,
		repository: repo.html_url,
		languages: [],
		post: '',
		template: repo.is_template ? true : false,
		coverImage: '',
	}));
}

export default function ProjectsPage({ stringifiedProjects }: ProjectProps): JSX.Element {
	const projects = JSON.parse(stringifiedProjects) as Array<Project>;
	const [githubRepos, setGitHubRepos] = useState<Array<Project>>([]);
	const { theme } = useTheme();
	const prefersDarkColorScheme = useMedia('(prefers-color-scheme: dark)', false);

	const isDark = useMemo(() => {
		switch (theme) {
			case Theme.SYSTEM:
				return prefersDarkColorScheme ? true : false;
			case Theme.LIGHT:
				return false;
			case Theme.DARK:
				return true;
		}
	}, [prefersDarkColorScheme, theme]);

	const [search, setSearch] = useState('');
	const [stateFilter, setStateFilter] = useState('All');
	const [typeFilter, setTypeFilter] = useState('Base Projects');
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 2;

	useEffect(() => {
		if (typeFilter === 'Open Source') {
			fetchGitHubRepos().then(setGitHubRepos);
		} else {
			setGitHubRepos([]);
		}
	}, [typeFilter]);

	// Apply search and filter functionality
	const filteredProjects = (typeFilter === 'Open Source' ? githubRepos : projects).filter(project => {
		const matchesSearch = project.name.toLowerCase().includes(search.toLowerCase()) || project.description.toLowerCase().includes(search.toLowerCase());
		const matchesState = stateFilter === 'All' || project.state === stateFilter;
		const isNotArchived = stateFilter === 'archived' || project.state !== 'archived';
		return matchesSearch && matchesState && isNotArchived;
	});

	const totalProjects = filteredProjects.length;
	const totalPages = Math.ceil(totalProjects / itemsPerPage);

	const paginatedProjects = filteredProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

	return (
		<Layout.Default seo={{
			title: 'Our Projects | Infinity Development',
			description: 'A list of all the projects we have worked on, are working on, and have planned for the future.',
		}}>
			<Toaster
				toastOptions={{
					position: 'bottom-right',
					style: {
						background: isDark ? colors.gray[900] : colors.gray[50],
						borderColor: isDark ? colors.gray[800] : colors.gray[100],
						borderWidth: '2px',
						color: isDark ? colors?.gray[400] : colors?.gray[700],
					},
				}}
			/>
			<div className="mx-2 my-24 sm:mx-6 lg:mb-28 lg:mx-8">
				<div className="relative max-w-xl mx-auto">
					<header className="mb-12 text-center">
						<Animate
							as="h1"
							animation={{
								opacity: [0, 1],
								scale: [0.75, 1],
							}}
							className="text-2xl font-extrabold tracking-tight text-gray-500 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
							Our <Pill.Standard className="mt-4">Projects</Pill.Standard>
						</Animate>

						<Animate
							as="p"
							animation={{
								opacity: [0, 1],
								scale: [0.75, 1],
							}}
							className="max-w-xs mx-auto mt-4 text-base text-zinc-400 md:mt-8 sm:text-lg md:text-xl md:max-w-3xl"
							transition={{
								delay: 0.5,
							}}>
							Explore our curated list of past, present, and future projects.
						</Animate>
					</header>
					<div className="mb-8">
						<input
							type="text"
							placeholder="Search projects..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							className="w-full p-2 mb-4 text-black border rounded dark:text-white border-primary-500"
						/>
						<select
							value={typeFilter}
							onChange={(e) => setTypeFilter(e.target.value)}
							className="w-full p-2 mb-4 text-black border rounded dark:text-white border-primary-500"
						>
							<option value="Base Projects">Base Projects</option>
							<option value="Open Source">Open Source</option>
						</select>
						<select
							value={stateFilter}
							onChange={(e) => setStateFilter(e.target.value)}
							className="w-full p-2 mb-4 text-black border rounded dark:text-white border-primary-500"
						>
							<option value="All">All States</option>
							{typeFilter === 'Open Source' ? (
								<>
									<option value="template">Template</option>
									<option value="archived">Archived</option>
									<option value="fork">Fork</option>
								</>
							) : (
								<>
									<option value="active">Active</option>
									<option value="archived">Archived</option>
									<option value="in-progress">In Progress</option>
								</>
							)}
						</select>
					</div>
					{totalProjects === 0 ? (
						<div className="text-center text-gray-500 dark:text-zinc-400">
							Whoops, sorry about that chief but we couldn't find any projects that matched your search criteria.
						</div>
					) : (
						<ProjectList.Container>
							{paginatedProjects.map((project, projectIndex) => (
								<Animate
									animation={{ y: [50, 0], opacity: [0, 1] }}
									key={projectIndex}
									transition={{
										delay: 0.1 * projectIndex,
									}}>
									<ProjectList.Item
										actions={[
											...(project.post
												? [
													{
														type: ListActionType.LINK,
														external: false,
														href: project.post,
														icon: 'feather:edit-3',
														label: `Blog post about ${project.name}`,
													} as ListAction,
												]
												: []),
											...(project.homepage
												? [
													{
														type: ListActionType.LINK,
														href: project.homepage,
														icon: 'feather:home',
														state: project.state,
														label: `${project.name} homepage`,
													} as ListAction,
												]
												: []),
											{
												type: ListActionType.LINK,
												href: project.url,
												icon: 'feather:github',
												label: 'GitHub Repository',
											},
										]}
										description={project.description}
										icon={project.icon}
										title={project.name}
										state={project.state as any}
										visibility={project.private}
										coverImage={project.coverImage}
										template={project.template}
									/>
								</Animate>
							))}
						</ProjectList.Container>
					)}
					<div className="flex justify-between mt-8">
						<button
							onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
							disabled={currentPage === 1}
							className="px-4 py-2 text-white rounded bg-primary-500 disabled:opacity-50"
						>
							Previous
						</button>
						<span className="px-4 py-2 text-black/50 dark:text-white/50">{currentPage} of {totalPages}</span>
						<button
							onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
							disabled={currentPage === totalPages}
							className="px-4 py-2 text-white rounded bg-primary-500 disabled:opacity-50"
						>
							Next
						</button>
					</div>
				</div>
			</div>
		</Layout.Default>
	);
}