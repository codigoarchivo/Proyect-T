import { FC, ReactNode, useReducer } from "react";

import { UIContext, uiReducer } from ".";

export interface UIState {
    tabsMenuOpen: number,
    transMenuOpen: boolean,
}

interface UIData {
    children: ReactNode
}

const UI_INITIAL_STATE: UIState = {
    tabsMenuOpen: 1,
    transMenuOpen: false,
}



export const UIProvider: FC<UIData> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)



    const toggleTabsMenu = (newValue: any) => {
        dispatch({
            type: '[UI] - Toggle - Tabs',
            payload: newValue
        })
    }

    const toggleTransMenu = () => {
        dispatch({ type: '[UI] - Toggle - Trans' })
    }

    return (
        <UIContext.Provider value={{
            ...state,

            // methods
            toggleTabsMenu,
            toggleTransMenu,
        }}>
            {children}
        </UIContext.Provider>
    )
}
