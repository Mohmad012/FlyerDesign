import SafePrice from '@/components/global/ui/badges/SafePrice'
import TrashIcon from '@/components/icons/TrashIcon'
import { updateProductQuantity } from '@/lib/redux/slices/cart'
import { UPDATE_ITEM_TO_CART } from '@/services/cart'
import { handleDeleteItem } from '@/utils/cart'
import { Popover, Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const NavCartPopup = ({ cart: products, queryClient }) => {
  const dispatch = useDispatch()
  const {t} = useTranslation('common')
  const {locale} = useRouter()
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Popover.Panel className={`absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:top-full lg:right-0 lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5 ${locale.includes('ar') ? 'lg:right-auto' : 'lg:left-auto'}`}>
        <h2 className="sr-only">Shopping Cart</h2>

        <form className="mx-auto max-w-2xl px-2 flex flex-col justify-center">
          {
            products?.length ? (
              <ul role="list" className="divide-y divide-gray-200 max-h-80 overflow-y-auto no-scrollbar">
                {products.map((product, productIdx) => (
                  <li key={productIdx} className="flex w-full justify-between py-6">
                    <Image
                      src={`${process.env.webUrl}/media/catalog/product/${product?.image}`}
                      alt={product?.name}
                      width={72}
                      height={72}
                      className="h-18 w-18 flex-none object-contain"
                    />
                    <div className="mx-2 flex-auto">
                      <h3 className="font-bold clamp-2 text-gray-900">
                        <Link href={`/${product?.extension_attributes?.product_sku}`}>{product?.name}</Link>
                      </h3>
                      <div className=" text-black flex gap-2 text-md">
                        <span className="font-bold">{product?.price} ر.س</span>
                        {product?.extension_attributes?.original_price && <span className='text-neutral-600 line-through'>{product?.extension_attributes?.original_price && parseFloat(product?.extension_attributes?.original_price).toFixed(2)} ر.س</span>}
                      </div>
                      <SafePrice amount={product?.extension_attributes?.original_price - product?.price
                      } className='w-fit mt-2 scale-75 ring-0' />
                      <div className="flex justify-between items-center mt-2">
                        <select
                          id={`quantity-${productIdx}`}
                          name={`quantity-${productIdx}`}
                          defaultValue={product?.qty}
                          onChange={e => UPDATE_ITEM_TO_CART(product?.item_id, e.target.value).then(res =>{
                            console.log('**********', res)
                            if(!res?.error){
                              const {item_id, qty} = res?.data?.cart
                              toast.success('Product Quantity updated')
                              return dispatch(updateProductQuantity({ item_id, qty }))
                            }
                            toast('Product Quantity Faild')

                          })}
                          className="block max-w-full rounded-md border border-gray-300 py-1 pr-8 text-left text-base text-gray-700 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm"
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
                        <button className='flex items-center gap-2 text-gray-400 hover:text-red-600'>
                          <TrashIcon onClick={() => handleDeleteItem(queryClient, product.item_id)} height={14} />
                        </button>
                      </div>
                    </div>

                  </li>
                ))}
              </ul>
            )

            : <div className="text-gray-400 flex items-center justify-center h-24 text-xl">Cart is Empty</div>
          }

          <Link
            href='/cart'
            type="submit"
            className="w-9/12 mx-auto rounded-md border border-transparent bg-primary-600 pt-2 pb-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-500 duration-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-50 text-center"
          >
            {t('goto_cart')}
          </Link>


        </form>
      </Popover.Panel>
    </Transition>
  )
}

export default NavCartPopup