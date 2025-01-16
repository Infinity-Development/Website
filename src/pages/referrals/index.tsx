import splitbee from '@splitbee/web';
import toast from 'react-hot-toast';
import writeText from 'copy-to-clipboard';
import { Icon } from '@iconify/react';
import { Toaster } from 'react-hot-toast';
import { useMedia } from 'react-use';
import { useMemo, useState } from 'react';
import { useTheme } from 'next-themes';

import { colors } from '~/lib';
import { Layout } from '~/layouts';
import { Animate, List, Pill } from '~/components';
import { ListAction, ListActionType, Theme } from '~/types';

import type { GetStaticProps } from 'next';

import type { Referrals, ReferralSection } from '~/types';

interface ReferralsProps {
	referrals?: Referrals;
}

export const getStaticProps: GetStaticProps<ReferralsProps> = async () => {
	const { default: rawReferrals } = await import('~/data/referrals.json');

	const referrals = rawReferrals as Referrals;

	return {
		props: {
			referrals,
		},
	};
};

//@ts-ignore
export default function ReferralsPage({ referrals }: ReferralsProps): JSX.Element {
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
	const [category, setCategory] = useState('All');
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 3;

	const allReferrals = referrals.flatMap(section => section.referrals);
	const filteredReferrals = allReferrals.filter(referral => {
		const matchesCategory = category === 'All' || referral.category === category;
		const matchesSearch = referral.name.toLowerCase().includes(search.toLowerCase()) || referral.description.toLowerCase().includes(search.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	const totalPages = Math.ceil(filteredReferrals.length / itemsPerPage);
	const paginatedReferrals = filteredReferrals.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

	return (
		<Layout.Default seo={{
			title: 'Referrals | Infinity Development',
			description: 'Explore our curated list of referral links and enjoy exclusive benefits.',
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
							Our <Pill.Standard className="mt-4">Referrals</Pill.Standard>
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
							Explore our curated list of referral links and enjoy exclusive benefits.
						</Animate>
					</header>
					<div className="mb-8">
						<input
							type="text"
							placeholder="Search referrals..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							className="w-full p-2 mb-4 text-black border rounded dark:text-white border-primary-500"
						/>
						<select
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							className="w-full p-2 text-black rounded dark:text-white border-primary-500 placeholder:zinc-400"
						>
							<option value="All">All Categories</option>
							{[...new Set(allReferrals.map(referral => referral.category))].map((cat, index) => (
								<option key={index} value={cat}>{cat}</option>
							))}
						</select>
					</div>
					<List.Container>
						{paginatedReferrals.map((referral, index) => (
							<Animate
								animation={{ y: [50, 0], opacity: [0, 1] }}
								key={index}
								transition={{
									delay: 0.1 * index,
								}}>
								{/* @ts-expect-error */}
								<List.Item
									actions={[
										{
											type: ListActionType.LINK,
											icon: 'feather:home',
											label: `${referral.name} homepage`,
											href: referral.homepage,
										},
										...(referral.affiliate
											? [
												{
													type: ListActionType.LINK,
													icon: 'feather:star',
													label: 'Affiliate Link',
													href: referral.affiliate,
													onClick: () =>
														splitbee.track(referral.name.toLowerCase(), {
															code: referral.code,
															type: 'affiliate',
															url: referral.affiliate,
														}),
												} as ListAction,
											]
											: []),
										...(referral.code
											? [
												{
													type: ListActionType.BUTTON,
													icon: 'feather:hash',
													label: 'Copy Referral Code',
													onClick: () => {
														writeText(referral.code);
														toast.success('Copied referral code');
													},
												} as ListAction,
											]
											: []),
										...(referral.url
											? [
												{
													type: ListActionType.LINK,
													icon: 'feather:external-link',
													label: 'Referral Link',
													href: referral.url,
													onClick: () =>
														splitbee.track(referral.name.toLowerCase(), {
															code: referral.code,
															type: 'referral',
															url: referral.url,
														}),
												} as ListAction
											]
											: [])
									]}
									description={referral.description}
									icon={referral.icon}
									iconColor={referral.color}
									title={referral.name}>
									{referral.bonus && (
										<div className="m-2 mt-0">
											<Pill.Standard className="flex items-center justify-center w-full text-sm rounded-lg md:pb-2 bg-primary-500 bg-opacity-15 saturate-200 text-primary-500">
												<Icon
													className="mt-0.5 mr-2"
													icon="feather:award"
												/>
												{referral.bonus}
											</Pill.Standard>
										</div>
									)}
								</List.Item>
							</Animate>
						))}
					</List.Container>
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