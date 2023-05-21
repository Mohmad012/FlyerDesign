import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

const AddToCartPopup = ({cart: cartItem, msg}) => {
  const {t} = useTranslation('cart')
  return (
    <div className='px-4'>
      <h1 className='py-1 px-8 font-bold text-gray-800'>{msg || 'Product added successfully to cart'}</h1>
      {cartItem ?
        <>
          <li className="flex w-full justify-between items-center py-6">
            <Image
                src={`${process.env.webUrl}/media/catalog/product/${cartItem?.image[0]}`}
                alt={cartItem?.name}
              width={130}
              height={130}
              className="h-24 w-32 flex-none object-contain"
            />
            <div className="mx-2 flex-auto">
              <h3 className="font-bold clamp-2 text-gray-900 text-lg">
                <Link href={`/${cartItem?.sku}`}>{cartItem?.name}</Link>
              </h3>
              <div className=" text-black flex gap-2 text-md">
                <span className="font-bold">{cartItem?.prices_with_tax?.price} ر.س</span>
                  <span className='text-neutral-600 line-through'>{cartItem?.prices_with_tax?.original_price} ر.س</span>
              </div>
            </div>
          </li>
       </>
      : <div className=" text-3xl text-gray-500">{t('your_cart_empty')}</div>
      }
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <Link href='/' className='w-full md:w-1/2 ring-1 ring-primary-500 text-primary-500 font-bold h-10 flex items-center justify-center p-2 rounded-md cursor-pointer'>{t('continue_shopping')}</Link>
        <Link href='/cart' className='w-full md:w-1/2 ring-1 ring-primary-500 bg-primary-500 text-white font-bold h-10 flex items-center justify-center p-2 rounded-md cursor-pointer'>{t('goto_cart')}</Link>
      </div>
    </div>
  )
}

export default AddToCartPopup