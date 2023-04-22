/**
 *
 */
import { EntriesState } from "./";

type EntriesActtionType = { type: "[Entries] - ActionName" };

export const entriesReducer = (state: EntriesState, action: EntriesActtionType) => {
	switch (action.type) {
		case "[Entries] - ActionName":
			return {
				...state,
			};

		default:
			return state;
	}
};
