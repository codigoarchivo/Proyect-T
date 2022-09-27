import { FC, useReducer, ReactNode } from 'react';

import Swal from 'sweetalert2';

import { fileUpload } from '../../helpers';

import { EntriesContext, EntriesReducer } from './';

export interface EntriesState {
    upload: string;
}

interface Props {
    children: ReactNode
}

const Entries_INITIAL_STATE: EntriesState = {
    upload: ''
}

export const EntriesProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(EntriesReducer, Entries_INITIAL_STATE);

    const startUploading = async (file: string) => {
        Swal.fire({
            title: "uploading...",
            text: "Please wait...",
            allowOutsideClick: false,

            didOpen: () => {
                Swal.showLoading();
            },
        });

        const fileUrl = await fileUpload(file);

        state.upload = fileUrl
        dispatch({ type: '[Entries] - Upload - Videos' })

        Swal.close();
    };

    return (
        <EntriesContext.Provider value={{
            ...state,

            // method
            startUploading,
        }}>
            {children}
        </EntriesContext.Provider>
    )
}