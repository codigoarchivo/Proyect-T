import { createContext } from "react";

interface ContextProps {
    tabsMenuOpen: number;
    // methods
    toggleTabsMenu: (newValue: number) => void;
}

export const UIContext = createContext({} as ContextProps)