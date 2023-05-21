import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import {useTranslation} from 'next-i18next'
import Sidebar from '@/components/dashbourd/Sidebar'
import Settings from '@/components/dashbourd/Settings'

const Dashboard = () => {
  const {t} = useTranslation('dashbourd')

  return (
    <>
      <Head>
        <title>{t('Voucherek')}</title>
      </Head>
      <main className='mx-auto relative transform flex justify-around w-full max-w-full md:max-w-[80%] rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
        <Sidebar />
        <Settings />
      </main>
    </>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['dashbourd', 'common'])),
    },
  }
}

export default Dashboard
