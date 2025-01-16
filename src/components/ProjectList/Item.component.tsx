import clsx from 'clsx';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useState } from 'react';

import { Animate, Button, Pill } from '~/components';
import { Action } from './Action.component';
import { ListActionType } from '~/types';

import type { ReactNode } from 'react';
import type { ListAction, WithChildren } from '~/types';

interface ItemProps extends WithChildren {
	visibility: boolean;
	state?: 'active' | 'maintenance' | 'archived' | 'in-progress' | 'fork' | 'open-source';
	template: boolean;
	actions?: Array<ListAction>;
	description?: string;
	icon?: string | ReactNode;
	iconColor?: string;
	title: string;
	coverImage?: string;
}

export function Item({
	state,
	visibility,
	template,
	actions,
	children,
	description,
	icon,
	iconColor,
	title,
	coverImage,
}: ItemProps): JSX.Element {
	const [imageError, setImageError] = useState(false);

	return (
		<li className="transition duration-300 ease-in-out bg-opacity-75 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-900 dark:bg-opacity-75 backdrop-filter backdrop-blur-sm dark:border-gray-500">
			{coverImage && !imageError ? (
				<div className="relative w-full h-64 overflow-hidden rounded-t-lg">
					<Image
						src={coverImage}
						alt={title}
						layout="fill"
						objectFit="cover"
						onError={() => setImageError(true)}
					/>
				</div>
			) : (
				<div
					className={clsx(
						'flex items-center justify-center w-full h-64 rounded-t-lg mb-4',
						iconColor === undefined && 'bg-primary-500',
					)}
					style={{
						backgroundColor: iconColor !== undefined ? iconColor : undefined,
					}}>
					{typeof icon === 'string' ? (
						<Icon className="w-12 h-12 text-white" icon={icon} />
					) : (
						icon
					)}
				</div>
			)}
			<div className="flex flex-col items-center px-4 py-4 sm:px-6">
				<div className="w-full text-center">
					<h1 className="mb-2 text-lg font-bold text-gray-700 dark:text-white">
						{title}
					</h1>
					{description && (
						<p className="mb-4 text-xs text-gray-500 dark:text-gray-400">
							{description}
						</p>
					)}
				</div>
				<div className="flex justify-between w-full mt-4">
					<div className="inline-flex items-center space-x-2">
						{actions && actions.map((action, index) => {
							switch (action.type) {
								case ListActionType.BUTTON:
									return (
										<Action
											aria-label={action.label}
											key={index}
											onClick={action.onClick}>
											<span className="sr-only">{action.label}</span>
											<Icon className="mt-1" icon={action.icon} />
										</Action>
									);
								case ListActionType.LINK:
									if (action.external ?? true)
										if (state !== 'maintenance')
											if (!visibility)
												return (
													<Action
														as="a"
														aria-label={action.label}
														href={action.href}
														key={index}
														onClick={action.onClick}
														rel="noopener noreferrer"
														target="_blank">
														<span className="sr-only">{action.label}</span>
														<Icon className="mt-1" icon={action.icon} />
													</Action>
												);
									if (state !== 'archived')
										if (!visibility)
											return (
												<Link href={action.href} passHref>
													<Action
														as="a"
														aria-label={action.label}
														key={index}
														onClick={action.onClick}>
														<span className="sr-only">{action.label}</span>
														<Icon className="mt-1" icon={action.icon} />
													</Action>
												</Link>
											);
							}
						})}
					</div>
					<div className="flex items-center space-x-2">
						{state === 'archived' && (
							<Pill.Standard className="w-auto text-xs h-7">{'Archived/Deprecated'}</Pill.Standard>
						)}
						{state === 'maintenance' && (
							<Pill.Warn className="w-auto text-xs h-7">{'Maintenance'}</Pill.Warn>
						)}
						{state === 'in-progress' && (
							<Pill.Info className="w-auto text-xs h-7">{'In Progress'}</Pill.Info>
						)}
						{state === 'active' && (
							<Pill.Success className="w-auto text-xs h-7">{'Active'}</Pill.Success>
						)}
						{state === 'open-source' && (
							<Pill.Success className="w-auto text-xs h-7">{'Github Repo'}</Pill.Success>
						)}
						{state === 'fork' && (
							<Pill.Info className="w-auto text-xs h-7">{'Fork'}</Pill.Info>
						)}
						{visibility && (
							<Pill.Error className="w-auto text-xs h-7">{'Private Repo'}</Pill.Error>
						)}
						{template && (
							<Pill.Standard className="w-auto text-xs h-7">{'Template'}</Pill.Standard>
						)}
					</div>
				</div>
			</div>
			{children}
		</li>
	);
}