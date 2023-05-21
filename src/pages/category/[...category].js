import {useRouter} from 'next/router'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import {useMutation} from 'react-query'
import {useEffect, useState} from 'react'
import {useInView} from 'react-intersection-observer'

// dynamic compoents import
const BreadcrumbContainer = dynamic(
  () => import('@/components/category/containers/Breadcrumb'),
  {ssr: false}
)
const AsideDealsContainer = dynamic(
  () => import('@/components/category/containers/AsideDeals'),
  {ssr: false}
)

const CategorySlidesContainer = dynamic(
  () => import('@/components/category/containers/CategorySlides'),
  {ssr: false}
)
const DropdownsSection = dynamic(
  () => import('@/components/category/containers/DropdownsSection'),
  {ssr: false}
)
const Countdown = dynamic(() => import('@/components/global/Countdown'), {
  ssr: false,
})
const CatagoriesList = dynamic(
  () => import('@/components/category/containers/Categories-list'),
  {
    ssr: false,
  }
)
const DealsContainer = dynamic(
  () => import('@/components/category/containers/Deals'),
  {ssr: false}
)
const ProductList = dynamic(
  () => import('@/components/category/containers/Product-list'),
  {ssr: false}
)
const CataloguesOffers = dynamic(
  () => import('@/components/category/containers/CataloguesOffers'),
  {ssr: false}
)
const AmazingDiscountsOnHomeProducts = dynamic(
  () =>
    import('@/components/category/containers/AmazingDiscountsOnHomeProducts'),
  {ssr: false}
)

import TheMostImportantCatalogues from '@/components/category/containers/TheMostImportantCatalogues'

// import all api required function
import {getCurrentCity} from '@/utils/global/functions'

import {
  getCategoryData,
  getHomePageStracture,
  localeHandShake,
} from '@/services/global'

import {fetchGetMoreProducts, getProductsData} from '@/services/category'

import {getProductsBulkBySKU} from '@/services/global/elasticSearch'
import {
  getAsideDealsData,
  getImagesSlides,
  getMainBannersData,
  getSortFilterData,
} from '@/constant/category'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {loadMoreProducts} from '@/utils/category'

function Category({
  countdown,
  mainBanners,
  pro3Products,
  getCataloguesOffersData,
  amazingDiscountsOnHomeProductsDataSkus,
  getAmazingDiscountsOnHomeProductsData,
  getTheMostImportantCataloguesData,
  locale,
  imagesSlides,
  AsideDealsData,
  sortFilterData,
  categoryID,
}) {
  const [currentProducts, setCurrentProducts] = useState(pro3Products)

  const [currentSortFilterKeys, setCurrentSortFilterKeys] = useState('')
  const [pageNo, setPageNo] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const {t} = useTranslation('category')
  const router = useRouter()
  const {locale: activeLocale} = router
  const {ref: bottomRef, inView} = useInView({
    threshold: 0,
    initialInView: false,
  })

  const mutation = useMutation(
    ({pageNo, categoryID, locale, currentSortFilterKeys}) =>
      fetchGetMoreProducts({
        nextPage: pageNo,
        categoryID,
        locale,
        currentSortFilterKeys,
      })
  )

  useEffect(() => {
    if (inView && !isVisible) {
      loadMoreProducts({
        pageNo,
        setPageNo,
        setIsVisible,
        mutation,
        categoryID,
        locale,
        currentSortFilterKeys,
        setCurrentProducts,
      })
    }
  }, [
    inView,
    categoryID,
    currentSortFilterKeys,
    locale,
    pageNo,
    isVisible,
    mutation,
  ])

  return (
    <>
      <Head>
        <title>{t('Voucherek')}</title>
      </Head>
      <Countdown data={countdown} locale={locale} />
      <CatagoriesList data={mainBanners} />
      {currentProducts?.slice(0, 2)?.length ? (
        <section className='mt-4'>
          <div className='c-container'>
            <BreadcrumbContainer name={AsideDealsData?.name} t={t} />
          </div>
          <DealsContainer
            data={currentProducts?.slice(0, 2)}
            isTwoCols={false}
            isReversed={true}>
            <AsideDealsContainer t={t} data={AsideDealsData} />
          </DealsContainer>

          <div className='c-container'>
            <CategorySlidesContainer imagesSlides={imagesSlides || []} />
          </div>
        </section>
      ) : (
        ''
      )}

      <section className='h-16 mb-6 bg-primary-600 flex justify-center items-center'>
        <DropdownsSection
          sortFilterData={sortFilterData}
          setCurrentProducts={setCurrentProducts}
          setCurrentSortFilterKeys={setCurrentSortFilterKeys}
          locale={locale}
          pageNo={pageNo}
          categoryID={categoryID}
        />
      </section>
      {currentProducts?.slice(2, 4)?.length ? (
        <section>
          <DealsContainer
            data={currentProducts?.slice(2, 4)}
            isTwoCols={true}
            isReversed={false}
          />
          <ProductList data={currentProducts?.slice(4, 10)} />
        </section>
      ) : (
        ''
      )}

      <section className=" bg-[url('/assets/images/backgrounds/Catalogue.jpg')] bg-no-repeat bg-center bg-cover">
        <CataloguesOffers
          router={router}
          activeLocale={activeLocale}
          data={getCataloguesOffersData}
        />
      </section>
      {currentProducts?.slice(10, 12)?.length ? (
        <section className='mt-4'>
          <DealsContainer
            data={currentProducts?.slice(10, 12)}
            isTwoCols={true}
            isReversed={true}
          />
          <ProductList data={currentProducts?.slice(12, 18)} />
        </section>
      ) : (
        ''
      )}

      <section className=" bg-[url('/assets/images/backgrounds/discount2.jpg')] bg-no-repeat bg-center bg-cover">
        <AmazingDiscountsOnHomeProducts
          router={router}
          activeLocale={activeLocale}
          data={amazingDiscountsOnHomeProductsDataSkus}
          getAmazingDiscountsOnHomeProductsData={
            getAmazingDiscountsOnHomeProductsData
          }
          titleColor='text-black'
        />
      </section>
      {currentProducts?.slice(18, 20)?.length ? (
        <section className='mt-4'>
          <DealsContainer
            data={currentProducts?.slice(18, 20)}
            isTwoCols={true}
            isReversed={false}
          />
          <ProductList
            data={currentProducts?.slice(20, currentProducts?.length)}
          />
        </section>
      ) : (
        ''
      )}

      <section className='c-sec-my' ref={bottomRef}>
        <TheMostImportantCatalogues
          // ref={bottomRef}
          router={router}
          activeLocale={locale}
          data={getTheMostImportantCataloguesData}
        />
      </section>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking', // can also be true or 'blocking'
  }
}

export async function getStaticProps({locale, params, revalidate}) {
  const homeStData = await getHomePageStracture()
  const {token} = await localeHandShake(locale)
  // static token until fixed from backend
  // get current index and current city based on locale to use it on fetching data
  const currentCity = getCurrentCity(locale)
  const categoryData = await getCategoryData(token)
  const getParentCategoryId = categoryData?.data?.children_data?.find(item =>
    item?.url_key?.includes(params.category[0])
  )
  const categoryID =
    params.category?.length > 1
      ? getParentCategoryId?.children_data?.find(item =>
          item?.url_key?.includes(params.category[1])
        )?.id
      : getParentCategoryId?.id

  const productsWithSubCategoryData = await getProductsData({
    token,
    categoryID,
    pageNo: 0,
  })

  const objPath = homeStData[currentCity][0]

  const getAmazingDiscountsOnHomeProductsSkus = await getProductsBulkBySKU(
    objPath['promo-catalog']?.skus,
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
    mainBanners: getMainBannersData(categoryData),
    pro3Products: productsWithSubCategoryData?.products,
    imagesSlides: getImagesSlides(params, categoryData, categoryID),
    AsideDealsData: getAsideDealsData(
      params,
      categoryData,
      productsWithSubCategoryData
    ),
    sortFilterData: getSortFilterData(productsWithSubCategoryData),
    categoryID,
    ...(await serverSideTranslations(locale, ['category', 'common'])),
  }

  return {
    props: {
      ...allData,
    },
  }
}

export default Category
