import { createContext } from "react";

interface ContextProps {
    tabsMenuOpen: number;
    transMenuOpen: boolean;
    // methods
    toggleTabsMenu: (newValue: number) => void;
    toggleTransMenu: () => void;
}

export const UIContext = createContext({} as ContextProps)