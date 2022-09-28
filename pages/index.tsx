import type { GetStaticProps, NextPage } from 'next'

import { TyerraLayout } from '../components/layouts'

import { Swipers } from '../components/ui'

import { getForMe } from '../database/forMe'

import { IforMe } from '../interfaces';

interface Props {
  forMe: IforMe[];
}
const HomePage: NextPage<Props> = ({ forMe }) => {
  return (
    <TyerraLayout title={'Home'} pageDescription={'Pagina de inicio'}>
      <Swipers forMe={forMe} />
    </TyerraLayout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async () => {

  const forMe = await getForMe();

  if (!forMe) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      forMe
    },
    revalidate: 60 * 60 * 24
  }
}



export default HomePage
