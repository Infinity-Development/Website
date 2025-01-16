import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	//@ts-ignore
	props: Partial<ComponentProps<typeof NextSeo>> = {},

	//@ts-ignore
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'Infinity Development';
	const description = 'Empowering your digital life with innovative services, crafted by a passionate team of developers.';

	return {
		title,
		description,
		canonical: `https://infinitydevs.ca/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'Toxic Development',
			url: `https://infinitydevs.ca/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://infinitydevs.ca/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@HeyToxicDevs',
			site: '@HeyToxicDevs',
		},
		...props,
	};
}
