import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
const Title = dynamic(() => import('@/components/global/Title'))
const Loader = dynamic(() => import('@/components/global/ui/Loader'))
const CartIcon = dynamic(() => import('@/components/icons/CartIcon2'))
const CartItem = dynamic(() => import('@/components/pages/Cart/CartItem'))
const Coupon = dynamic(() => import('@/components/pages/Cart/Coupon'))
const RelatedProducts = dynamic(() =>
  import('@/components/pages/product/RelatedProducts')
)

import { useTranslation } from 'next-i18next'
import { getAllCartItems } from '@/lib/redux/slices/cart'
import { APPLY_COUPON, DELETE_COUPON, GET_CART, } from '@/services/cart'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useQuery, useQueryClient } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsBulkBySKU } from '@/services/global/elasticSearch'
import Cookies from 'js-cookie'
import { groupBy } from '@/utils/global/functions'
import { useState } from 'react'
import { toast } from 'react-toastify'

export default function Cart() {
  const { t } = useTranslation('cart')
  const [skus, setSkus] = useState([])
  const dispatch = useDispatch()
  const { cart, cartItems } = useSelector(state => state.cart)
  const queryClient = useQueryClient()
  const hasCoupon = cart?.totals_data?.coupon_code

  const getcart = useQuery('cart', () => GET_CART(), {
    staleTime: 30 * 60000,
    onSuccess:({data}) =>{
      console.log(data)
    //   const mySkus = data?.totals_data?.items.map(product => product?.extension_attributes?.product_links)
    //   const allProducts = [...new Set([].concat(...mySkus?.map(item => item.map(p => ({ type: p.link_type, sku: p.linked_product_sku })))))]
    //   const groupedProducts = groupBy(allProducts, 'type')
    //   setSkus([[...new Set(groupedProducts?.upsell?.map(i => i.sku))], [...new Set(groupedProducts?.crosssell?.map(i => i.sku))]])
    }
   })
   console.log(getcart?.data?.data?.data)
  if (getcart.isSuccess && getcart?.data?.data?.data?.items) {
    dispatch(getAllCartItems(getcart?.data?.data?.data))
  }


  const recentProductsData = useQuery({
    queryKey: 'recentProducts',
    queryFn: () => getProductsBulkBySKU(JSON.parse(localStorage.getItem('recentProducts') || []), Cookies.get('handshake')),
    staleTime:10 * 60000
  })



  console.log(skus)
  const applyCoupon = (coupon) => {
    hasCoupon ?
      DELETE_COUPON(coupon).then(res =>{
        console.log('reeeeeeeeeeees', res)
        if(res.status === 200){
          Cookies.remove('coupon')
          toast.success(res?.data?.msg)
          queryClient.invalidateQueries('cart')
        }else{
          toast.error(res?.error)
        }
      })
      : APPLY_COUPON(coupon).then(res =>{
        console.log('reeeeeeeeeeees', res)
        if(res.status === 200){
          Cookies.set('coupon', JSON.stringify(res?.data))
          toast.success(res?.data?.msg)
          queryClient.invalidateQueries('cart')
        }else{
          toast.error(res?.error)
        }
      })
  }

  if (getcart.isLoading) return <Loader />
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      {cartItems?.length ? (
        <main className='c-container'>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-12 sm:col-span-6 lg:col-span-8'>
              <Title
                title={`${t('cart_title_key')}(${cart?.items?.length}) `}
                style='font-bold text-2xl py-px my-px'
              />
              <div className='rounded-md ring-2 ring-primary-500 p-4 mt-4 max-h-[500px] overflow-y-auto no-scrollbar'>
                {cartItems.map((cartItem, idx) => (
                  <CartItem key={idx} t={t} data={cartItem} />
                ))}
              </div>
            </div>
            <div className='col-span-12 sm:col-span-6 lg:col-span-4'>
              <div className='bg-gray-200 p-4 rounded-md pb-8'>
                <Title title={t('order_summary')} />
                <Coupon
                  onClick={applyCoupon}
                  hasCoupon={hasCoupon}
                  coupon_code={cart?.totals_data?.coupon_code}
                  text={{apply: t('apply'), remove: t('remove')}}
                />

                <ul className='mt-8'>
                  <li className='flex justify-between items-center font-bold text-sm my-2 text-neutral-600'>
                    <span className='w-9/12'>{`${t('sub_total')} (${
                      cart?.items?.length === 1
                        ? '1' + t('product')
                        : cart?.items?.length === 2
                        ? '2' + t('two_product')
                        : t('products')
                    })`}</span>
                    <span>{cart?.totals_data?.subtotal + ' ' + t('SAR')}</span>
                  </li>
                  <li className='flex justify-between items-center font-bold text-sm my-2 text-neutral-600'>
                    <span className='w-9/12'>{t('shipping')}</span>
                    <span>
                      {cart?.totals_data?.shipping_amount === 0 ? (
                        <span className='text-green-500'>{t('free')}</span>
                      ) : (
                        `${cart?.totals_data?.shipping_amount}  ${t('SAR')}`
                      )}
                    </span>
                  </li>
                  {hasCoupon && (
                    <li className='flex justify-between items-center font-bold text-sm my-2 text-neutral-600'>
                      <span className='w-9/12'>{t('discount_amount')}</span>
                      <span>
                        {cart?.totals_data?.discount_amount + ' ' + t('SAR')}
                      </span>
                    </li>
                  )}
                  <li className='flex justify-between items-center font-bold text-sm my-2 text-neutral-600'>
                    <span className='w-9/12'>{t('subtotal_include_tax')}</span>
                    <span>{`${cart?.totals_data?.subtotal_with_discount} ${t(
                      'SAR'
                    )}`}</span>
                  </li>
                  {hasCoupon && (
                    <li className='bg-[#d6f9d3] ring-1 ring-[#2BAB21] text-[#2BAB21] rounded-md pt-1 pb-2 px-2 my-4 flex gap-4 items-center'>
                      <CartIcon height={20} />
                      <span>{t('correct_coupon')}</span>
                    </li>
                  )}
                </ul>
                <Link
                  href='/checkout'
                  className='flex items-center justify-center bg-primary-600 hover:bg-primary-500 h-12 rounded-md text-white w-full mt-8'>
                  {t('chekcout')}
                </Link>
              </div>
              <div className='mt-4'>
                <Title title={t('we_accept')} style='text-sm font-bold mb-0' />
                <Image
                  src='/assets/acceptedpayments.png'
                  width={300}
                  height={100}
                  alt='accepted payment'
                  className='object-contain w-[80%9'
                />
              </div>
            </div>
          </div>
          {recentProductsData?.data?.length && <RelatedProducts
            products={recentProductsData?.data}
            title={t('products_viewed_recently')}
            link='/#watched'
            dur={5000}
          />}
          <RelatedProducts
            title={t('top_sell_products')}
            link='/#top-sale'
            dur={3000}
          />
        </main>
      ) : (
        <div className='flex flex-col gap-4 items-center justify-center min-h-[80vh] my-8'>
          <Image
            src='/assets/empty-cart.svg'
            alt='Empty Cart'
            width={300}
            height={300}
          />
          <div className='font-bold text-xl text-gray-500'>
            <span>{t('cart_empty')}</span>
            <span className='text-primary-500'>{t('empty')}</span>
          </div>
          <div className='text-gray-500'>{t('empty_cart_msg')}</div>
          <Link
            href='/'
            className='bg-primary-600 hover:bg-primary-500 h-12 rounded-md text-white w-full max-w-[250px] flex items-center justify-center mt-8'>
            {' '}
            {t('continue_shopping')}
          </Link>
        </div>
      )}
    </>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'cart'])),
    },
  }
}
