export type StatusTypes = 'OPERATIONAL' | 'DEGRADEDPERFORMANCE' | 'PARTIALOUTAGE' | 'MAJOROUTAGE' | 'UNDERMAINTENANCE' | 'UNKNOWN';

export const READABLE_STATUS: {
	[S in StatusTypes]: any;
} = {
	['OPERATIONAL']: 'Operational',
	['DEGRADEDPERFORMANCE']: 'Degraded Performance',
	['PARTIALOUTAGE']: 'Partial Outage',
	['MAJOROUTAGE']: 'Major Outage',
	['UNDERMAINTENANCE']: 'Active Maintenance',
	['UNKNOWN']: 'Unknown',
};

export const STATUS_COLOR: {
	[S in StatusTypes]: any;
} = {
	['OPERATIONAL']: 'green',
	['DEGRADEDPERFORMANCE']: 'yellow',
	['PARTIALOUTAGE']: 'orange',
	['MAJOROUTAGE']: 'red',
	['UNDERMAINTENANCE']: 'purple',
	['UNKNOWN']: 'gray',
};
