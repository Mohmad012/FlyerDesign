import ProductCard from '@/components/global/cards/ProductCard2'
import {useTranslation} from 'next-i18next'
import React from 'react'

const ProductList = ({data}) => {
  const [structure, products] = data
  const rowProductsSKU = structure[2].sku
  const rowProducts = products?.filter(product =>
    rowProductsSKU.some(sku => sku === product?._source?.sku)
  )
  const {t} = useTranslation('home')
  return (
    <div className='c-container mb-0 mt-4 py-0'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {rowProducts.map(({_source:product},idx) => (
          <ProductCard
            key={idx}
            IsHeader={false}
            Size={'lg'}
            Image={`${process.env.NEXT_PUBLIC_IMAGE_BASEURL}/media/catalog/product/${product?.image[0]}`}
            Dicount={(1 - (product?.prices_with_tax?.price / product?.prices_with_tax?.original_price)) * 100}
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
    </div>
  )
}

export default ProductList
