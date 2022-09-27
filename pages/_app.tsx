import type { AppProps } from 'next/app'

import { CssBaseline } from '@mui/material'

import { ColorsProvider } from '../context/colors'

import { EntriesProvider } from '../context/entries'

import { UIProvider } from '../context/ui'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
        <ColorsProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </ColorsProvider>
      </UIProvider>
    </EntriesProvider>
  )
}

export default MyApp
