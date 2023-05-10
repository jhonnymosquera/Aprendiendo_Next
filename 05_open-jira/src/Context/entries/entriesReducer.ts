/**
 *
 */
import { Entry } from '@/interfaces';
import { EntriesState } from './';

type EntriesActtionType =
	| { type: '[Entry] - Add-Entry'; payload: Entry }
	| { type: '[Entry] - Update-Emtry'; payload: Entry };

export const entriesReducer = (
	state: EntriesState,
	action: EntriesActtionType
) => {
	switch (action.type) {
		case '[Entry] - Add-Entry':
			return {
				...state,
				entries: [...state.entries, action.payload],
			};

		case '[Entry] - Update-Emtry':
			return {
				...state,
				entries: state.entries.map((entri) => {
					if (entri._id === action.payload._id) {
						entri.status = action.payload.status;
						entri.description = action.payload.description;
					}
					return entri;
				}),
			};

		default:
			return state;
	}
};
