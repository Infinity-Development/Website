import { NextSeo } from 'next-seo';

import { Navbar } from '~/components';
import { useSeoProps } from '~/lib';

//@ts-ignore
import type { ComponentProps, PropsWithChildren } from 'react';

interface BlogLayoutProps {
	//@ts-ignore	
	seo?: Partial<ComponentProps<typeof NextSeo>>;
}

//@ts-ignore
export function BlogLayout({ children, seo }: PropsWithChildren<BlogLayoutProps>): JSX.Element {
	const seoProps = useSeoProps({
		title: 'Blog | Infinity Development',
		description: 'Welcome to the Infinity Development blog. Here you will find articles on web development, software engineering, and more.',
		...seo,
	});

	return (
		<>
			<NextSeo {...seoProps} />
			<Navbar.Standard />
			<main className="flex flex-col justify-center sm:px-8">{children}</main>
		</>
	);
}
