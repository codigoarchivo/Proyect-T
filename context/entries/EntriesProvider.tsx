import { FC, useReducer, ReactNode } from 'react';

import Swal from 'sweetalert2';

import { entriesApi } from '../../api/[id]';

import { fileUpload } from '../../helpers';

import { IforMe } from '../../interfaces';

import { EntriesContext, EntriesReducer } from './';

export interface EntriesState {
    list: IforMe[];
    active: string;
}

interface Props {
    children: ReactNode
}

const Entries_INITIAL_STATE: EntriesState = {
    list: [],
    active: '',
}

export const EntriesProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(EntriesReducer, Entries_INITIAL_STATE);

    const upload = async (file: any) => {
        Swal.fire({
            title: "uploading...",
            text: "Please wait...",
            allowOutsideClick: false,

            didOpen: () => {
                Swal.showLoading();
            },
        });

        const fileUrl = await fileUpload(file);
        console.log(fileUrl);
        

        state.active = fileUrl

        Swal.close();
    };


    const listAdd = async (d: IforMe) => {

        const newdata: IforMe = {
            title: d.title,
            description: d.description,
            tags: d.tags,
            videos: [...d.videos, state.active],
            slug: d.slug,
            inLike: d.inLike,
            inSend: d.inSend,
            inSave: d.inSave,
            inShare: d.inShare,
        }
// console.log(newdata);

        const { data } = await entriesApi.post<IforMe>(`/${d._id}`, newdata)

        dispatch({ type: '[Entries] - Add', payload: data })
    }

    const listData = async (data: IforMe[]) => {
        dispatch({ type: '[Entries] - List', payload: data })
    }

    const listActive = async (data: string) => {
        dispatch({ type: '[Entries] - Active', payload: data })
    }


    return (
        <EntriesContext.Provider value={{
            ...state,

            // method
            upload,
            listData,
            listAdd,
            listActive,
        }}>
            {children}
        </EntriesContext.Provider>
    )
}