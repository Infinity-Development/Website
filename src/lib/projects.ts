import { log } from 'next-axiom';
import type { Project, ProjectSection } from '~/types';

export async function fetchProjects(): Promise<Array<Project> | null> {
	try {
		const { default: rawProjects } = await import('~/data/projects.json');
		const projectSections = rawProjects as Array<ProjectSection>;

		// Transform the data to match the Project type
		const projects: Array<Project> = projectSections.flatMap(section =>
			section.projects.map(project => ({
				description: project.description,
				name: project.name,
				state: project.state,
				private: project.private,
				url: project.url,
				icon: project.icon,
				homepage: project.homepage,
				repository: project.repository,
				languages: project.languages,
				post: project.post,
				template: project.template,
				coverImage: project.coverImage,
			}))
		);

		return projects;
	} catch (error) {
		log.error('Failed to fetch projects', error);
		return null;
	}
}