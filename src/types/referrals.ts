export interface Referral {
	name: string;
	icon: string;
	code?: string;
	color?: string;
	bonus?: string;
	aliases?: string;
	affiliate?: string;
	description: string;
	homepage: string;
	category: string;
	url?: string;
}

export interface ReferralSection {
	section: string;
	about: string;
	slug: string;
	referrals: Array<Referral>;
}

export type Referrals = Array<ReferralSection>;