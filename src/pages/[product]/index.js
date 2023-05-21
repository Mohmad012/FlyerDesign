import React from 'react'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import Countdown from '@/components/global/Countdown'
import Title from '@/components/global/Title'
import {Map, Tabs} from '@/components/pages/product'
import CataloguesCarousel from '@/components/global/carousels/Catalogues-carousel'
import CouponUse from '@/components/pages/product/CouponUse'
import {paymentMethods, VoucherUseList} from '@/constant/pdp'
import ProductDetails from '@/components/pages/product/ProductDetails'
import Breadcrumb from '@/components/global/Breadcrumb'
import {UseLang} from '@/hooks/UseLang'
import {useRouter} from 'next/router'
import {getHomePageStracture} from '@/services/global'
import {
  getProductsBulkBySKU,
  getSingleProductBySku,
  localeHandShake,
} from '@/services/global/elasticSearch'
import ProductsCarousel from '@/components/global/carousels/Products-carousel'
import Loader from '@/components/global/ui/Loader'
import SEO from '@/components/seo'
import {getCurrentCity} from '@/utils/global/functions'
import {useEffect} from 'react'
import Cookies from 'js-cookie'

/*
- product tabs done except rating tab
+ Map
+ using voucher
+ related products
- products for same seller => not found
+ Same brand products
+ Catalogues
*/
const ProductDetailsPage = ({
  product,
  relatedProducts,
  sameBrandProducts,
  crossSellProducts,
  catalogues,
}) => {
  const {t} = useTranslation('product')
  const {locale} = useRouter()
  if (!product) return <Loader />
  const ProductUrl = 'https://web.voucherek.com/' + product?._source?.sku
  const quote = Cookies.get('quote')
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const storedProducts =
      JSON.parse(localStorage.getItem('recentProducts')) || []
    const updatedProducts = [
      product?._source?.sku,
      ...storedProducts.filter(item => item !== product?._source?.sku),
    ]
    localStorage.setItem('recentProducts', JSON.stringify(updatedProducts))
  })
  return (
    <>
      <SEO
        title={product?._source?.name}
        description={product?.short_description || product?.description}
        image={product?._source?.image[0]}
        pathname={product?._source?.sku}
      />
      <Countdown
        data={{days: 0, hours: 0, minutes: 0, seconds: 12}}
        t={t}
        locale={locale}
      />
      <div>
        <div className='c-container'>
          <Breadcrumb data={product?._source} />
          <ProductDetails
            data={product?._source}
            crossSellproducts={crossSellProducts}
            paymentMethods={paymentMethods}
            shareLink={ProductUrl}
            t={t}
          />
          <Tabs data={product} />
          <Map
            position={[
              product?._source?.latitude || 24.774265,
              product?._source?.longitude || 46.738586,
            ]}
            t={t}
          />
          <CouponUse data={VoucherUseList} locale={locale} t={t} />
          <ProductsCarousel
            data={relatedProducts}
            title='related products'
            t={t}
          />
          <ProductsCarousel
            data={sameBrandProducts}
            title='products for same brand'
            t={t}
          />
          {catalogues?.status && (
            <>
              <Title
                title={UseLang(
                  locale,
                  catalogues.arabic_title,
                  catalogues.english_name
                )}
              />
              <CataloguesCarousel
                data={catalogues.data}
                locale={locale}
                t={t}
              />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default ProductDetailsPage
export async function getStaticProps({locale, params: {product = ''}}) {
  const sku = product.startsWith('P-') || product.startsWith('22')  ? product : product.lastIndexOf('-p-p-') !== -1 ?
    product?.slice(product.lastIndexOf('-p-p-') + 3).toUpperCase()
    : product?.slice(product.lastIndexOf('-p-') + 3)
  console.log('***************************************************sku', sku)
  const homeStData = await getHomePageStracture()
  const handShake = await localeHandShake(locale)
  const {token} = handShake
  const productData = await getSingleProductBySku(sku, token)

  // if (!productData?.length) {
  //   return {
  //     redirect: {
  //       destination: '/404',
  //       permanent: false,
  //     },
  //   }
  // }

  const currentCity = getCurrentCity(locale)
  const objPath = homeStData[currentCity][0]

  const relatedProductsSkus = productData[0]?._source?.custom_related_products
  const sameBrandSkus = productData[0]?._source?.same_brand?.split(',')
  const crossSellProductsSkus = productData[0]?._source?.cross_sell_products
  const getProductsSameBrand = await getProductsBulkBySKU(sameBrandSkus, token)
  const getRelatedProducts = await getProductsBulkBySKU(
    relatedProductsSkus,
    token
  )
  const getCrossSellProducts = await getProductsBulkBySKU(
    crossSellProductsSkus,
    token
  )
  return {
    props: {
      product: productData[0] || [],
      relatedProducts: getRelatedProducts,
      sameBrandProducts: getProductsSameBrand,
      crossSellProducts: getCrossSellProducts,
      catalogues: objPath.flyer1,
      ...(await serverSideTranslations(locale, ['common', 'product', 'cart'])),
    },
  }
}

// getstaticprops notfound?

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
