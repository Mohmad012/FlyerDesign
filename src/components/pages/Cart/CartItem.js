import SafePrice from '@/components/global/ui/badges/SafePrice'
import GuaranteeIcon from '@/components/icons/GuaranteeIcon'
import TrashIcon from '@/components/icons/TrashIcon'
import WishlistIcon from '@/components/icons/WishlistIcon'
import { deleteItemFromCart, updateProductQuantity } from '@/lib/redux/slices/cart'
import { DELETE_CART_ITEM, UPDATE_ITEM_TO_CART } from '@/services/cart'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useQueryClient } from 'react-query'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
const CartItem = ({data:product, t}) => {
  const queryClient = useQueryClient()
  const dispatch = useDispatch()
  return (
    <div className='grid grid-cols-12 gap-4 mb-8 rounded-md'>
      <div className="col-span-12 lg:col-span-3 mx-auto">
        <Image
          src={`${process.env.webUrl}/media/catalog/product/${product?.image}`}
          alt={product?.name}
        width={250} height={200} className='object-contain rounded-md' />
      </div>
      <div className="col-span-12 lg:col-span-6 flex flex-col gap-1">
        <Link href={`/${product?.extension_attributes?.product_sku}`} className="text-md font-bold clamp-2">{product?.name}</Link>
        <div className="text-red-400">متبقي {product?.qty} وحدات</div>
        <div className="flex items-end gap-2">
          <GuaranteeIcon width={18} />
          <span className='text-sm font-bold'>ضمان لمده عامين</span>
        </div>
        <div>
          سيتم التوصيل الجمعه
          <span className="underline"> 12 مارس</span>
        </div>
        <div className="actions flex gap-4 mt-4 md:mt-0">
          <button onClick={() => DELETE_CART_ITEM( product.item_id).then(res =>{
            console.log('reeeeeeeeeeeeeeeeeeees', res)
            if(res.status === 200){
              dispatch(deleteItemFromCart(product?.item_id))
              toast.success(res?.data?.msg)
              queryClient.invalidateQueries('cart')
            }else{
              toast.success(res?.error)
            }
          })} className='flex items-center gap-2 text-gray-500 hover:text-red-600'>
            <TrashIcon height={14} />
            <span>{t('remove')}</span>
          </button>
          <button className='flex items-center gap-2 text-gray-500 hover:text-primary-500'>
            <WishlistIcon height={18} />
            <span>اضف إلى المفضلة</span>
          </button>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-3">
        <div className="text-lg text-black my-4 flex gap-2 items-end justify-center">
          <span className="font-bold">{product?.price} {t('SAR')}</span>
          {product?.extension_attributes?.original_price && <span className='text-neutral-600 line-through text-lg'>{product?.extension_attributes?.original_price && parseFloat(product?.extension_attributes?.original_price).toFixed(2)} {t('SAR')}</span>}
        </div>
        <SafePrice amount={product?.extension_attributes?.original_price - product?.price} className='w-fit mx-auto' />
        <select
          defaultValue={product?.qty}
          onChange={e => UPDATE_ITEM_TO_CART(product?.item_id, e.target.value).then(res => {
            console.log('**********', res)
            if (res?.status === 200) {
              const { item_id, qty } = res?.data?.cart
              toast.success('Product Quantity updated')
              queryClient.invalidateQueries('cart')
              return dispatch(updateProductQuantity({ item_id, qty }))
            }
            toast('Product Quantity Faild')

          })}
          className="block max-w-full rounded-md border border-gray-300 py-1 mx-auto mt-4  text-left text-base text-gray-700 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm"
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
        </select>

      </div>
    </div>
  )
}

export default CartItem