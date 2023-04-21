import { FC, useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
	sidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
	sidemenuOpen: false,
};

export const UIProviders: FC<any> = ({ children }) => {
	const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

	const ioenSideMenu = () => {
		dispatch({ type: "UI - Open Sidebar" });
	};

	const closeSideMenu = () => {
		dispatch({ type: "UI - Close Sidebar" });
	};

	return (
		<UIContext.Provider
			value={{
				...state,
				ioenSideMenu,
				closeSideMenu,
			}}
		>
			{children}
		</UIContext.Provider>
	);
};
