import splitbee from '@splitbee/web';

import type { GetServerSideProps } from 'next';

import type { Referrals, Referral } from '~/types';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const { default: rawReferrals } = await import('~/data/referrals.json');
	const referrals = rawReferrals as Referrals;

	if (!params.name) {
		return {
			redirect: {
				destination: '/referrals',
				permanent: true,
			},
		};
	}

	const paramName = Array.isArray(params.name)
		? params.name[0].toLowerCase()
		: params.name.toLowerCase();

	let result: Referral | undefined;

	for (const section of referrals) {
		result = section.referrals.find((referral) => {
			const referralName = referral.name.toLowerCase();

			if (referralName === paramName) return true;

			if (referral.aliases) {
				return referral.aliases.split(',').some((alias) => alias.toLowerCase() === paramName);
			}

			return false;
		});

		if (result) break;
	}

	if (result) {
		splitbee.track(result.name.toLowerCase(), {
			code: result.code,
			type: 'referral',
			url: result.url,
		});

		return {
			redirect: {
				destination: result.url || '/referrals',
				permanent: true,
			},
		};
	} else {
		return {
			redirect: {
				destination: '/referrals',
				permanent: true,
			},
		};
	}
};

export default function ReferralRedirectPage(): null {
	return null;
}