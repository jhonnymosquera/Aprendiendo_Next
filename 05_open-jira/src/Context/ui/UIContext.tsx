import { createContext } from "react";

export interface ContextProps {
	sidemenuOpen: boolean;
	ioenSideMenu: () => void;
	closeSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);
