import { EntriesState } from './';
import { IforMe } from '../../interfaces';


type EntriesActionType =
    | { type: '[Entries] - List', payload: IforMe[] }
    | { type: '[Entries] - Add', payload: IforMe }
    | { type: '[Entries] - Active', payload: string }

export const EntriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
    switch (action.type) {
        case '[Entries] - Active':
            return {
                ...state,
                active: action.payload
            }
        case '[Entries] - List':
            return {
                ...state,
                list: action.payload
            }
        case '[Entries] - Add':
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        default: state;
            return state;
    }
}