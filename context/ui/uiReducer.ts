import { UIState } from '.';
// UIState proviene del UIProvider interface

type UIActionType =
    | { type: '[UI] - Toggle - Tabs', payload: 0 }
    | { type: '[UI] - Toggle - Trans' }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {

    switch (action.type) {
        case '[UI] - Toggle - Tabs':
            return {
                ...state,
                tabsMenuOpen: action.payload
            }
        case '[UI] - Toggle - Trans':
            return {
                ...state,
                transMenuOpen: !state.transMenuOpen
            }
        default:
            return state

    }
}