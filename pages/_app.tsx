import type { AppProps } from 'next/app'

import { CssBaseline } from '@mui/material'

import { ColorsProvider } from '../context/colors'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorsProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </ColorsProvider>
  )
}

export default MyApp
