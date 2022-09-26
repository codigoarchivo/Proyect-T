import { FC, ReactNode, useReducer } from "react";

import { UIContext, uiReducer } from ".";

export interface UIState {
    tabsMenuOpen: number,
}

interface UIData {
    children: ReactNode
}

const UI_INITIAL_STATE: UIState = {
    tabsMenuOpen: 0,
}



export const UIProvider: FC<UIData> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)



    const toggleTabsMenu = (newValue: any) => {

        dispatch({
            type: '[UI] - Toggle - Tabs',
            payload: newValue
        })
    }

    return (
        <UIContext.Provider value={{
            ...state,

            // methods
            toggleTabsMenu,
        }}>
            {children}
        </UIContext.Provider>
    )
}
