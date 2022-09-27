import { EntriesState } from './';

type EntriesActionType =
    | { type: '[Entries] - Upload - Videos' }

export const EntriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
    switch (action.type) {
        case '[Entries] - Upload - Videos':
            return {
                ...state,
                upload: state.upload
            }
        default: state;
            return state;
    }
}