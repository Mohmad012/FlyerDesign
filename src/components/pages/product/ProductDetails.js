import ProductCarousel from '@/components/global/carousels/Product-carousel'
import ProductsCarousel from '@/components/global/carousels/Products-carousel'
import Title from '@/components/global/Title'
import DicountBadge from '@/components/global/ui/badges/Discount'
import SafePrice from '@/components/global/ui/badges/SafePrice'
import AddToCart from '@/components/global/ui/buttons/AddToCart'
import Modal from '@/components/global/ui/Modal'
import RatingStars from '@/components/global/ui/Rating'
import Share from '@/components/global/ui/Share'
import AlarmIcon from '@/components/icons/AlarmIcon'
import { ADD_ITEM_TO_CART, } from '@/services/cart'
import { EyeIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import AddToCartPopup from '../Cart/popup/AddToCart'
import { addItemToCart } from '@/lib/redux/slices/cart'
import { useDispatch } from 'react-redux'

const ProductDetails = ({ data: product, crossSellproducts, shareLink, t }) => {
  const dispatch = useDispatch()
  const [showModal, setShoModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [cartItemRes, setCartItemRes] = useState({})
  return (
    <>
      <div className='grid grid-cols-12 gap-4 py-2 pt-6'>
        <div className='col-span-12 md:col-span-6 lg:col-span-8 rounded-md overflow-hidden'>
          <div className='mb-4 flex flex-col md:flex-row items-start justify-between gap-4'>
            <div>
              <Title title={product?.name[0]} style='my-px py-px text-2xl' />
              <span
                className='text-md font-bold text-neutral-500'
                dangerouslySetInnerHTML={{
                  __html: product?.description,
                }}
              />
              <div className='mt-4'>
                <RatingStars t={t} rate={4} />
              </div>
            </div>
            {product?.seller_logo && (
              <div className='w-32'>
                <Image
                  src={`${process.env.webUrl}/media/avatar/${product?.seller_logo}`}
                  width={80}
                  height={40}
                  alt='extra'
                  className='object-contain'
                />
              </div>
            )}
          </div>
          <ProductCarousel data={product} className='bg-sky-400 h-auto'>
            <DicountBadge
              text={t('Discount up to')}
              width={120}
              dicount={
                (1 -
                  product?.prices_with_tax?.price /
                  product?.prices_with_tax?.original_price) *
                100
              }
            />
          </ProductCarousel>
        </div>
        <div className='col-span-12 md:col-span-6 lg:col-span-4 rounded-lg bg-[#F8F3F3] p-4 flex flex-col gap-4'>
          <div className='flex p-2 pb-3 items-end gap-2 bg-white rounded-md shadow-sm'>
            <AlarmIcon width={16} className='text-primary-500' />
            <p className='text-gray-600 font-bold'>
              {t('available for limit time')}
            </p>
          </div>
          <div className='flex p-2 pb-3 items-end gap-2 bg-white rounded-md shadow-sm'>
            <EyeIcon width={16} className='text-gray-500' />
            <p className='text-gray-600'>
              {t('more than')} 100 {t('watched')}
            </p>
          </div>
          <div className=' bg-white p-2 pb-3 rounded-md shadow-sm'>
            <p className='text-gray-600 text-sm mb-4'>{t('payment methods')}</p>
            <Image
              src='/assets/acceptedpayments.png'
              width={150}
              height={50}
              alt={t('payment methods')}
              className='object-contain'
            />
          </div>
          <div className=' bg-white p-2 pb-3 rounded-md shadow-sm flex gap-2 items-center mb-10'>
            <span className='font-bold text-lg'>
              {product?.prices_with_tax.price} {t('sar')}
            </span>
            {product?.prices_with_tax.original_price -
              product?.prices_with_tax.price && (
                <span className='text-neutral-500 line-through'>
                  {product?.prices_with_tax.original_price} {t('sar')}
                </span>
              )}
            <SafePrice

              amount={
                product?.prices_with_tax.original_price -
                product?.prices_with_tax.price
              }
              t={t}
              className='scale-[70%] pb-3'
            />
          </div>
          <AddToCart
            onClick={() => {
              setLoading(true)
              ADD_ITEM_TO_CART(product.sku, 1).then((res) => {
                if (!res.error) {
                  setCartItemRes(res.data)
                  dispatch(addItemToCart({
                    ...res?.data?.cart,
                    image: product?.image,
                  }))
                  console.log({
                    ...res?.data?.cart,
                    image: product?.image,
                  })
                  setTimeout(() => setShoModal(true), 500)
                  toast.success('Product added')
                }
                else {
                  toast.error(res?.data?.error)
                }
              }).finally(
                setLoading(false)
              )

            }}
            loading={loading}

          />
          <button className='text-primary-600 font-bold hover:text-white hover:bg-primary-600 ring-1 ring-primary-600 rounded-md p-4 text-lg duration-500 transition-colors'>
            {t('buy fast')}
          </button>
          <div className='flex'>
            <Share link={shareLink} />
          </div>
        </div>
      </div>
      <Modal show={showModal} setShow={setShoModal} height={!cartItemRes?.cart && 'h-[300px]'} >
        {cartItemRes?.cart ?
          <>
            <AddToCartPopup cart={product} msg={cartItemRes?.msg} />
            <ProductsCarousel size='sm' data={crossSellproducts} title='related products' t={t} />
          </>
          : <div className="flex justify-center items-center p-6 text-gray-400">{cartItemRes?.msg || 'Failed to add product to cart, please try again'}</div>
        }


      </Modal>
    </>
  )
}

export default ProductDetails
