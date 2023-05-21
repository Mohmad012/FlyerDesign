import {dehydrate, QueryClient, useQuery} from 'react-query'
import {useRouter} from 'next/router'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import {getHomePageStracture} from '@/services/global'

// components import
import {
  getProductsBulkBySKU,
  localeHandShake,
} from '@/services/global/elasticSearch'
import SEO from '@/components/seo'
import {getCurrentCity} from '@/utils/global/functions'

// dynamic compoents import
const Countdown = dynamic(() => import('@/components/global/Countdown'), {
  ssr: false,
})
const CatagoriesList = dynamic(
  () => import('@/components/home/containers/Categories-list'),
  {ssr: false}
)
const DealsContainer = dynamic(
  () => import('@/components/home/containers/Deals'),
  {ssr: false}
)
const ProductList = dynamic(
  () => import('@/components/home/containers/Product-list'),
  {ssr: false}
)
const Tabs = dynamic(() => import('@/components/home/Tabs'), {ssr: false})
const FeaturedAdsContainer = dynamic(
  () => import('@/components/home/containers/FeaturedAds'),
  {ssr: false}
)
const CataloguesOffers = dynamic(
  () => import('@/components/home/containers/CataloguesOffers'),
  {ssr: false}
)
const AmazingDiscountsOnHomeProducts = dynamic(
  () => import('@/components/home/containers/AmazingDiscountsOnHomeProducts'),
  {ssr: false}
)
const TheMostImportantCatalogues = dynamic(
  () => import('@/components/home/containers/TheMostImportantCatalogues'),
  {ssr: false}
)

function Home({
  countdown,
  mainBanners,
  twoStaticBanners,
  pro3Products,
  tabsProducts,
  productsBulk,
  productsBulk2,
  footerProducts,
  footerProducts1,
  footerProducts2,
  footerProducts3,
  getCataloguesOffersData,
  amazingDiscountsOnHomeProductsDataSkus,
  getAmazingDiscountsOnHomeProductsData,
  getTheMostImportantCataloguesData,
  footerProducts4,
  locale,
}) {
  const {t} = useTranslation('home')
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{t('Voucherek')}</title>
        <meta name='keywords' content={t('keywords')} />
      </Head>
      <SEO title={t('Voucherek')} description={t('Voucherek_desc')} />
      <main>
        <Countdown data={countdown} locale={locale} />
        {mainBanners && <CatagoriesList data={mainBanners} locale={locale} />}
        <section>
          <DealsContainer
            isTwoCols={true}
            isReversed={pro3Products[0][1].type.includes('right')}
            data={pro3Products}
          />
          <Tabs data={tabsProducts} t={t} />
        </section>

        {
          <section className=" bg-[url('/assets/images/backgrounds/Catalogue.jpg')] bg-no-repeat bg-center bg-cover">
            <CataloguesOffers
              activeLocale={locale}
              data={getCataloguesOffersData}
            />
          </section>
        }

        {twoStaticBanners && (
          <FeaturedAdsContainer
            data={twoStaticBanners}
            locale={router.locale}
          />
        )}
        <section className='c-sec-my'>
          <DealsContainer
            data={[productsBulk[0], productsBulk[1]]}
            isTwoCols={true}
            isReversed={productsBulk[0][1].type.includes('right')}
          />
          <ProductList data={[productsBulk[0], productsBulk[1]]} />
        </section>

        <section className=" bg-[url('/assets/images/backgrounds/discount.jpg')] bg-no-repeat bg-center bg-cover">
          <AmazingDiscountsOnHomeProducts
            router={router}
            activeLocale={locale}
            data={amazingDiscountsOnHomeProductsDataSkus}
            getAmazingDiscountsOnHomeProductsData={
              getAmazingDiscountsOnHomeProductsData
            }
          />
        </section>

        <section className='c-sec-my'>
          <DealsContainer
            data={productsBulk2}
            isTwoCols={true}
            isReversed={productsBulk2[0][1].type.includes('right')}
          />
          <ProductList data={[productsBulk2[0], productsBulk2[1]]} />
        </section>

        <section className='c-sec-my'>
          <TheMostImportantCatalogues
            router={router}
            activeLocale={locale}
            data={getTheMostImportantCataloguesData}
          />
        </section>

        <section className='c-sec-my'>
          <DealsContainer
            data={[footerProducts[0], footerProducts[1]]}
            isTwoCols={true}
            isReversed={footerProducts[0][1].type.includes('right')}
          />
          <ProductList data={[footerProducts[0], footerProducts[1]]} />
        </section>
        <section className='c-sec-my'>
          <DealsContainer
            data={[footerProducts1[0], footerProducts1[1]]}
            isTwoCols={true}
            isReversed={footerProducts1[0][1].type.includes('right')}
          />
          <ProductList data={[footerProducts1[0], footerProducts1[1]]} />
        </section>
        <section className='c-sec-my'>
          <DealsContainer
            data={[footerProducts2[0], footerProducts2[1]]}
            isTwoCols={true}
            isReversed={footerProducts2[0][1].type.includes('right')}
          />
          <ProductList data={[footerProducts2[0], footerProducts2[1]]} />
        </section>
        <section className='c-sec-my'>
          <DealsContainer
            data={[footerProducts3[0], footerProducts3[1]]}
            isTwoCols={true}
            isReversed={footerProducts3[0][1].type.includes('right')}
          />
          <ProductList data={[footerProducts3[0], footerProducts3[1]]} />
        </section>
        <section className='c-sec-my'>
          <DealsContainer
            data={[footerProducts4[0], footerProducts4[1]]}
            isTwoCols={true}
            isReversed={footerProducts4[0][1].type.includes('right')}
          />
          <ProductList data={[footerProducts4[0], footerProducts4[1]]} />
        </section>
      </main>
    </>
  )
}

export async function getStaticProps({locale}) {
  const homeStData = await getHomePageStracture()
  const {token} = await localeHandShake(locale)
  const currentCity = getCurrentCity(locale)
  const objPath = homeStData[currentCity][0]

  const getAmazingDiscountsOnHomeProductsSkus = await getProductsBulkBySKU(
    objPath['promo-catalog']?.skus,
    token
  )

  const getProThreeProducts = await getProductsBulkBySKU(
    [objPath['pro-3-products'][0].sku, ...objPath['pro-3-products'][1].sku],
    token
  )
  const getProductsBulk = await getProductsBulkBySKU(
    [
      objPath['bulk-products'][0].sku,
      ...objPath['bulk-products'][1].sku,
      ...objPath['bulk-products'][2].sku,
    ],
    token
  )

  const getTabsProducts1 = await getProductsBulkBySKU(
    objPath.tabs[0].skus,
    token
  )
  const getTabsProducts2 = await getProductsBulkBySKU(
    objPath.tabs[1].skus,
    token
  )
  const getTabsProducts3 = await getProductsBulkBySKU(
    objPath.tabs[2].skus,
    token
  )
  const getTabsProducts4 = await getProductsBulkBySKU(
    objPath.tabs[3].skus,
    token
  )
  const getProductsBulk2 = await getProductsBulkBySKU(
    [
      objPath['bulk-products2'][0].sku,
      ...objPath['bulk-products2'][1].sku,
      ...objPath['bulk-products2'][2].sku,
    ],
    token
  )
  const getFooterProducts = await getProductsBulkBySKU(
    [
      objPath['footer-products'][0][0].sku,
      ...objPath['footer-products'][0][1]?.sku,
      ...objPath['footer-products'][0][2]?.sku,
    ],
    token
  )
  const getFooterProducts2 = await getProductsBulkBySKU(
    [
      objPath['footer-products'][1][0].sku,
      ...objPath['footer-products'][1][1]?.sku,
      ...objPath['footer-products'][1][2]?.sku,
    ],
    token
  )
  const getFooterProducts3 = await getProductsBulkBySKU(
    [
      objPath['footer-products'][2][0].sku,
      ...objPath['footer-products'][2][1]?.sku,
      ...objPath['footer-products'][2][2]?.sku,
    ],
    token
  )
  const getFooterProducts4 = await getProductsBulkBySKU(
    [
      objPath['footer-products'][3][0].sku,
      ...objPath['footer-products'][3][1]?.sku,
      ...objPath['footer-products'][3][2]?.sku,
    ],
    token
  )
  const getFooterProducts5 = await getProductsBulkBySKU(
    [
      objPath['footer-products'][4][0].sku,
      ...objPath['footer-products'][4][1]?.sku,
      ...objPath['footer-products'][4][2]?.sku,
    ],
    token
  )

  const allData = {
    locale,
    getCataloguesOffersData: objPath['flyer1'],
    amazingDiscountsOnHomeProductsDataSkus:
      getAmazingDiscountsOnHomeProductsSkus,
    getAmazingDiscountsOnHomeProductsData: objPath['promo-catalog'],
    getTheMostImportantCataloguesData: objPath['flyer2'],
    data: homeStData,
    countdown: objPath.counter,
    mainBanners: homeStData[currentCity][0]['main-banners'],
    pro3Products: [objPath['pro-3-products'], getProThreeProducts],
    tabsProducts: [
      objPath.tabs,
      [
        ...getTabsProducts1,
        ...getTabsProducts2,
        ...getTabsProducts3,
        ...getTabsProducts4,
      ],
    ],
    twoStaticBanners: homeStData[currentCity][0]['two-static-banners'],
    productsBulk: [objPath['bulk-products'], getProductsBulk],
    productsBulk2: [objPath['bulk-products2'], getProductsBulk2],
    footerProducts: [objPath['footer-products'][0], getFooterProducts],
    footerProducts1: [objPath['footer-products'][1], getFooterProducts2],
    footerProducts2: [objPath['footer-products'][2], getFooterProducts3],
    footerProducts3: [objPath['footer-products'][3], getFooterProducts4],
    footerProducts4: [objPath['footer-products'][4], getFooterProducts5],
    ...(await serverSideTranslations(locale, ['common', 'home'])),
  }

  return {
    props: {
      ...allData,
    },
  }
}

export default Home
