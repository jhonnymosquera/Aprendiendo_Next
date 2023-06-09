import { FC, useReducer } from 'react';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces/entry';
import { v4 as uuidv4 } from 'uuid';

export interface EntriesState {
	entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
	entries: [
		{
			_id: uuidv4(),
			description:
				'Pendiende: Loeramksda sdkajsdsj dlkajsdlkjasldkjalsdkjaldjlas kdjlaskjdalskjaldkjalskdjlask jdlaskdlasndlasdna',
			createAt: Date.now(),
			status: 'pendig',
		},
		{
			_id: uuidv4(),
			description:
				'En ProgresoLoeramksda sdkajsdsj dlkajsdlkjasldkjalsdkjaldjlas kdjlaskjdalskjaldkjalskdjlask jdlaskdlasndlasdna',
			createAt: Date.now() - 1000000,
			status: 'in-progress',
		},
		{
			_id: uuidv4(),
			description:
				'Finished: Loeramksda sdkajsdsj dlkajsdlkjasldkjalsdkjaldjlas kdjlaskjdalskjaldkjalskdjlask jdlaskdlasndlasdna',
			createAt: Date.now() - 100000,
			status: 'finished',
		},
	],
};

export const EntriesProviders: FC<any> = ({ children }) => {
	const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

	const addNewEntry = (description: string) => {
		const newEntry: Entry = {
			_id: uuidv4(),
			description,
			createAt: Date.now(),
			status: 'pendig',
		};

		dispatch({ type: '[Entry] - Add-Entry', payload: newEntry });
	};

	const updateEntry = (emtri: Entry) => {
		dispatch({ type: '[Entry] - Update-Emtry', payload: emtri });
	};

	return (
		<EntriesContext.Provider
			value={{
				...state,

				addNewEntry,
				updateEntry,
			}}
		>
			{children}
		</EntriesContext.Provider>
	);
};
