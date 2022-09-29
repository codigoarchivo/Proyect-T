import { createContext } from 'react';

import { IforMe } from '../../interfaces';

interface ContextProps {
    list: IforMe[];
    active: string;

    // method
    listData: (list: IforMe[]) => Promise<void>;
    upload: (file: string) => Promise<void>;
    listAdd: (d: IforMe) => Promise<void>;
    listActive: (data: string) => Promise<void>;
}

export const EntriesContext = createContext({} as ContextProps);