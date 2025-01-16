import { NextSeo } from 'next-seo';

import { useSeoProps } from '~/lib';

import type { WithChildren, WithProps } from '~/types';

interface DefaultLayoutProps extends WithChildren {
	seo?: Partial<WithProps<typeof NextSeo>>;
}
//@ts-ignore	
export function ErrorLayout({ children, seo }: DefaultLayoutProps): JSX.Element {
	const seoProps = useSeoProps({
		title: 'Whoops! | Infinity Development',
		description: 'An error occurred while trying to load the page.',
		...seo,
	});

	return (
		<>
			<NextSeo {...seoProps} />
			<main className="flex flex-col justify-center px-8">
				<div className="relative h-screen px-4 pt-24 pb-20 sm:pt-16 sm:px-6 lg:pb-28 lg:px-8">
					{children}
				</div>
			</main>
		</>
	);
}
