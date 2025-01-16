import dynamic from 'next/dynamic';
import { Icon } from '@iconify/react';

import { Animate, Button, Pill } from '~/components';
import { EventType, NavigationItemType } from '~/types';
import { Layout } from '~/layouts';

import type { EventProps } from '~/components/Event.component';
import type { NavigationItem } from '~/types';

const Event = dynamic<EventProps>(
	() => import('~/components/Event.component').then(({ Event }) => Event),
	{
		ssr: false,
	},
);

const ACTIONS: Array<NavigationItem> = [
	{
		type: NavigationItemType.LINK,
		href: '/blog',
		icon: <Icon className="mr-3" icon="feather:edit-3" />,
		text: 'Blog',
	},
	{
		type: NavigationItemType.LINK,
		href: '/projects',
		icon: <Icon className="mr-3" icon="feather:copy" />,
		text: 'Projects',
	},
	{
		type: NavigationItemType.LINK,
		external: true,
		href: 'https://github.com/Infinity-Development',
		icon: <Icon className="mr-3" icon="feather:github" />,
		text: 'GitHub',
	},
	{
		type: NavigationItemType.LINK,
		external: true,
		href: 'https://discord.gg/dUsN3Kux',
		icon: <Icon className="mr-3" icon="ic:baseline-discord" />,
		text: 'Discord',
	}
];

//@ts-ignore
export default function HomePage(): JSX.Element {
	const today = new Date();
	const birthday = new Date('2021-08-01');
	const isBirthday =
		today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth();

	const description = `Empowering your digital life with innovative services, crafted by a passionate team of developers.`;

	return (
		<Layout.Default>
			{isBirthday && <Event event={EventType.BIRTHDAY} />}
			<div className="flex items-center justify-center min-h-screen py-12">
				<div className="w-full max-w-md space-y-8 text-center sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl">
					<Animate
						as="h1"
						animation={{
							opacity: [0, 1],
							scale: [0.75, 1],
						}}
						className="text-5xl font-extrabold tracking-tight text-gray-500 dark:text-white sm:text-6xl md:text-6xl lg:text-8xl">
						Infinity <Pill.Standard className="mt-4">Development</Pill.Standard>
					</Animate>

					<Animate
						as="p"
						animation={{
							opacity: [0, 1],
							scale: [0.75, 1],
						}}
						className="max-w-xs mx-auto mt-4 text-base text-gray-400 md:mt-8 sm:text-lg md:text-xl md:max-w-3xl"
						transition={{
							delay: 0.5,
						}}>
						{description}
					</Animate>

					<div className="flex flex-col items-center justify-center w-full mt-8 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mt-4">
						{ACTIONS.map((action, index) => {
							if (action.type !== NavigationItemType.LINK) return null;

							return (
								<Animate
									animation={{
										y: [50, 0],
										opacity: [0, 1],
									}}
									className="w-full sm:w-auto"
									key={index}
									transition={{
										delay: 0.1 * (index + 2) + 0.5,
									}}>
									<Button.Outline href={action.href}>
										{action.icon}
										<span>{action.text}</span>
									</Button.Outline>
								</Animate>
							);
						})}
					</div>
				</div>
			</div>
		</Layout.Default>
	);
}
