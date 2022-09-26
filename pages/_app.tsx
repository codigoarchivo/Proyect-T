import type { AppProps } from 'next/app'

import { CssBaseline } from '@mui/material'

import { ColorsProvider } from '../context/colors'

import { UIProvider } from '../context/ui'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ColorsProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </ColorsProvider>
    </UIProvider>
  )
}

export default MyApp
