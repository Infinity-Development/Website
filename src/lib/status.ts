import { READABLE_STATUS, STATUS_COLOR } from '~/types';

export type Status = {
	loading: boolean;
	status: string;
	color: string;
}

async function getStatus() {
	const check = await fetch('https://toxic-development.instatus.com/summary.json');
	const response = await check.json();

	return {
		status: response.page.status,
	}
};

const status = await getStatus()

export function useStatus(): {
	loading: boolean;
	status: string;
	color: string;
} {

	console.log(status)

	return {
		loading: false,
		status: READABLE_STATUS[status['status']],
		color: STATUS_COLOR[status['status']],
	}
}
