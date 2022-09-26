import { UIState } from '.';
// UIState proviene del UIProvider interface

type UIActionType =
    | { type: '[UI] - Toggle - Tabs', payload: 0 }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {

    switch (action.type) {
        case '[UI] - Toggle - Tabs':
            return {
                ...state,
                tabsMenuOpen: action.payload
            }
        default:
            return state

    }
}