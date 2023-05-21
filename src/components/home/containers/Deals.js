import ProductCard from '@/components/global/cards/ProductCard2'
import FeaturedCarousel from '@/components/global/carousels/FeaturedCarousel'
import {useTranslation} from 'next-i18next'
import React from 'react'

const DealsContainer = ({isTwoCols = true, isReversed = false, data}) => {
  const {t} = useTranslation('home')
  const [structure, products] = data

  const sideProductSku = structure[1].sku
  const heroProduct = Array.isArray(products)
    ? products?.find(product => product._source.sku === structure[0].sku)
    : []
  const sideProducts = Array.isArray(products)
    ? products?.filter(product =>
    sideProductSku.some(sku => sku === product._source.sku)
  ) : []
  return (
    <div className='c-container my-0 py-0'>
      <div className='grid grid-cols-12  gap-4'>
        <div
          className={`col-span-12 ${
            isTwoCols ? 'lg:col-span-4' : 'lg:col-span-3'
          } rounded grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4`}>
          {sideProducts.map(({_source: product}, idx) => (
            <ProductCard
              key={idx}
              IsHeader={false}
              Size={isTwoCols ? 'lg' : 'sm'}
              Image={`${process.env.webUrl}/media/catalog/product/${product?.image[0]}`}
              Dicount={
                (1 -
                  product?.prices_with_tax?.price /
                    product?.prices_with_tax?.original_price) *
                100
              }
              DicountText={t('Discount up to')}
              Price={product?.prices_with_tax?.price}
              OldPrice={product?.prices_with_tax?.original_price}
              InfoBadgeText={t('Top rated')}
              Title={product?.name}
              currency={t('sar')}
              ButtonText={t('show')}
              {...product}
            />
          ))}
        </div>
        <div
          className={`${
            isReversed ? 'order-first' : 'order-none'
          } col-span-12  ${
            isTwoCols ? 'lg:col-span-8' : 'lg:col-span-6'
          } rounded-xl overflow-hidden shadow-lg`}>
          <FeaturedCarousel data={heroProduct?._source} t={t} />
        </div>
      </div>
    </div>
  )
}

export default DealsContainer
