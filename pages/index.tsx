import type { NextPage } from 'next'

import { TyerraLayout } from '../components/layouts'

import { Swipers } from '../components/ui'

const HomePage: NextPage = () => {
  return (
    <TyerraLayout title={'Home'} pageDescription={'Pagina de inicio'}>
       <Swipers/>
    </TyerraLayout>
  )
}

export default HomePage
