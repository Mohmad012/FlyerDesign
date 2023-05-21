import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductsList = ({products, t}) => {
  return (
    <ul role="list" className="divide-y divide-gray-200 max-h-80 overflow-y-auto no-scrollbar">
      {products ? products.map((product, productIdx) => (
        <li key={productIdx} className="flex w-full justify-between gap-3 py-4">
          <div className="text-center">
            <Image
              src={`${process.env.webUrl}/media/catalog/product/${product?.extension_attributes?.product_image}`}
              alt={product?.name}
              width={100}
              height={100}
              className="h-20 w-24 object-contain"
            />
            <span className="font-bold text-xs text-gray-500 ">{product?.qty} {t('Products')}</span>
          </div>
          <div className="mx-2 flex-auto">
            <h3 className="font-bold clamp-2 text-gray-900">
              <Link href={`/${product?.extension_attributes.product_sku}`}>{product?.name}</Link>
            </h3>
            <div className=" text-black flex flex-col gap-2 text-md">
              <span className="font-bold">{product?.price} {t('SAR')}</span>
              <p className="font-bold text-sm">
                <span>{t('free_shipping')} </span>
                <span className='text-primary-500'>{t('tomorrow')}</span>
                <br />
                <span className='text-primary-500'>{t('6 March')}</span>
              </p>
            </div>


          </div>

        </li>
      )):
        <div className=""></div>
      }
    </ul>
  )
}

export default ProductsList