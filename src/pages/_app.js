import {appWithTranslation} from 'next-i18next'
import {useState} from 'react'
import {Hydrate, QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import {config} from '@/utils/react-query-config'
import localFont from 'next/font/local'
import Layout from '@/layout'
import Head from 'next/head'
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import {store, persistor} from '@/lib/redux'
import NextNProgress from 'nextjs-progressbar'
import 'react-toastify/dist/ReactToastify.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '@/styles/globals.scss'
import '@/styles/custom/flip.scss'
// import 'react-pageflip/dist/es5/react-pageflip.css'
import {ToastContainer} from 'react-toastify'
import {useRouter} from 'next/router'

const HelveticaNeueLT = localFont({
  src: [
    {
      path: '../../public/assets/fonts/HelveticaNeueLT-Arabic-55-Roman.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/HelveticaNeueLT-Arabic-75-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-HelveticaNeueLT',
  fallback: ['Cairo', 'open-sans'],
})

function App({Component, pageProps}) {
  const [queryClient] = useState(() => new QueryClient(config))
  const {locale} = useRouter()

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Head>
              <link
                rel='shortcut icon'
                href='/favicon.ico'
                type='image/x-icon'
              />
              <meta name='theme-color' content='#FF2EAA' />
            </Head>
            <NextNProgress
              color='#FF2EAA'
              startPosition={0.3}
              stopDelayMs={200}
              height={4}
              showOnShallow={false}
            />
            <ToastContainer
              position='bottom-center'
              autoClose={3000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={locale.startsWith('ar')}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='light'
            />

            <Layout className={`${HelveticaNeueLT.variable} font-sans`}>
              <Component {...pageProps} />
            </Layout>
          </Hydrate>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  )
}
export default appWithTranslation(App)
