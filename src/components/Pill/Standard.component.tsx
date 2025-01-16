import clsx from 'clsx';
import { AnchorHTMLAttributes } from 'react';

interface StandardPillProps extends AnchorHTMLAttributes<HTMLDivElement> { }
interface ErrorPillProps extends AnchorHTMLAttributes<HTMLDivElement> { }
interface WarnPillProps extends AnchorHTMLAttributes<HTMLDivElement> { }
interface SuccessPillProps extends AnchorHTMLAttributes<HTMLDivElement> { }
interface InfoPillProps extends AnchorHTMLAttributes<HTMLDivElement> { }
interface StatusPillProps extends AnchorHTMLAttributes<HTMLDivElement> { }

export function Standard({ children, className, ...rest }: StandardPillProps): JSX.Element {
	return (
		<div
			className={clsx(
				'inline-flex px-3 lg:px-5 py-2 md:pb-4 bg-primary-500 bg-opacity-15 backdrop-filter backdrop-blur-sm filter saturate-200 text-primary-200 rounded-2xl default-transition default-focus',
				className,
			)}
			target="_blank"
			rel="noreferrer noopener"
			{...rest}>
			{children}
		</div>
	);
}

export function Error({ children, className, ...rest }: ErrorPillProps): JSX.Element {
	return (
		<div
			className={clsx(
				'inline-flex px-3 lg:px-5 py-2 md:pb-4 bg-red-500 bg-opacity-15 backdrop-filter backdrop-blur-sm filter saturate-200 text-red-200 rounded-2xl default-transition default-focus',
				className,
			)}
			target="_blank"
			rel="noreferrer noopener"
			{...rest}>
			{children}
		</div>
	)
}

export function Warn({ children, className, ...rest }: WarnPillProps): JSX.Element {
	return (
		<div
			className={clsx(
				'inline-flex px-3 lg:px-5 py-2 md:pb-4 bg-yellow-500 bg-opacity-15 backdrop-filter backdrop-blur-sm filter saturate-200 text-yellow-200 rounded-2xl default-transition default-focus',
				className,
			)}
			target="_blank"
			rel="noreferrer noopener"
			{...rest}>
			{children}
		</div>
	)
}

export function Success({ children, className, ...rest }: SuccessPillProps): JSX.Element {
	return (
		<div
			className={clsx(
				'inline-flex px-3 lg:px-5 py-2 md:pb-4 bg-green-500 bg-opacity-15 backdrop-filter backdrop-blur-sm filter saturate-200 text-green-200 rounded-2xl default-transition default-focus',
				className,
			)}
			target="_blank"
			rel="noreferrer noopener"
			{...rest}>
			{children}
		</div>
	)
}

export function Info({ children, className, ...rest }: InfoPillProps): JSX.Element {
	return (
		<div
			className={clsx(
				'inline-flex px-3 lg:px-5 py-2 md:pb-4 bg-blue-500 bg-opacity-15 backdrop-filter backdrop-blur-sm filter saturate-200 text-blue-200 rounded-2xl default-transition default-focus',
				className,
			)}
			target="_blank"
			rel="noreferrer noopener"
			{...rest}>
			{children}
		</div>
	)
}

export function Status({ children, className, ...rest }: StatusPillProps): JSX.Element {
	return (
		<div
			className={clsx(
				`flex items-center justify-center w-full h-auto md:pb-2 bg-primary-500 bg-opacity-15 saturate-200 text-sm text-primary-200 rounded-lg`,
				className,
			)}
			target="_blank"
			rel="noreferrer noopener"
			{...rest}>
			{children}
		</div>
	)
}