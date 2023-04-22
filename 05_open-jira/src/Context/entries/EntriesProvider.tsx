import { FC, useReducer } from "react";
import { EntriesContext, entriesReducer } from "./";
import { Entry } from "../../interfaces/entry";
import { v4 as uuidv4 } from "uuid";

export interface EntriesState {
	entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
	entries: [
		{
			_id: uuidv4(),
			description: "Loeramksda sdkajsdsj dlkajsdlkjasldkjalsdkjaldjlas kdjlaskjdalskjaldkjalskdjlask jdlaskdlasndlasdna",
			createAt: Date.now(),
			status: "pendig",
		},
		{
			_id: uuidv4(),
			description: "Loeramksda sdkajsdsj dlkajsdlkjasldkjalsdkjaldjlas kdjlaskjdalskjaldkjalskdjlask jdlaskdlasndlasdna",
			createAt: Date.now() - 1000000,
			status: "in-progress",
		},
		{
			_id: uuidv4(),
			description: "Loeramksda sdkajsdsj dlkajsdlkjasldkjalsdkjaldjlas kdjlaskjdalskjaldkjalskdjlask jdlaskdlasndlasdna",
			createAt: Date.now() - 100000,
			status: "completed",
		},
	],
};

export const EntriesProviders: FC<any> = ({ children }) => {
	const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

	return (
		<EntriesContext.Provider
			value={{
				...state,
			}}
		>
			{children}
		</EntriesContext.Provider>
	);
};
