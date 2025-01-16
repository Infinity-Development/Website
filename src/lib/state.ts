import { createState, useState } from '@hookstate/core';
import { Persistence } from '@hookstate/persistence';
import { useEffect } from 'react';
import { useMedia } from 'react-use';

import type { State } from '@hookstate/core';

import type { Settings } from '~/types';

//@ts-ignore
const DEFAULT_STATE = createState<Settings>({
	animations: null,
	sound: true,
});

export const STATE_KEY = 'settings';

//@ts-ignore
export function usePersistantState(): State<Settings> {
	const noMotionPreference = useMedia('(prefers-reduced-motion: no-preference)', true);

	const persistance = Persistence(STATE_KEY);
	//@ts-ignore
	const state = useState<Settings>(DEFAULT_STATE);

	useEffect(() => {
		state.attach(persistance);

		if (state.get().animations === null)
			state.set((state) => ({
				...state,
				animations: noMotionPreference,
			}));
	}, [noMotionPreference, persistance, state]);

	return state;
}
