import type { NextPage } from 'next'

import { TyerraLayout } from '../components/layouts'

const HomePage: NextPage = () => {
  return (
    <TyerraLayout title={'Home'} pageDescription={'Pagina de inicio'}>
      <h1>Hola Mundo</h1>
    </TyerraLayout>
  )
}

export default HomePage
