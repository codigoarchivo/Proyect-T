import { createContext } from 'react';

interface ContextProps {
    upload: string;

    // method
    startUploading: (file: string) => Promise<void>
}

export const EntriesContext = createContext({} as ContextProps);