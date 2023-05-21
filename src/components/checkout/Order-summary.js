import Link from 'next/link'
import React from 'react'
import { IoIosLock } from 'react-icons/io'
import Title from '../global/Title'
import Button from '../global/ui/buttons/ButtonXl'
import OuterBox from './containers/OuterBox'
import ProductsList from './Products-list'

const OrderSummary = ({ data: cart, onClick, secret, t}) => {
  const li_style ='flex justify-between items-center font-bold text-sm my-2 text-neutral-600'
  return (
    <div>
      <Title title="Order Summary" style="py-px my-4" />
      <OuterBox>
        <ProductsList products={cart?.totals_data?.items} t={t} />
      </OuterBox>
      <OuterBox>
        <ul>
          <li
            className={li_style}>
            <span className='w-9/12'>{`${t('sub_total')} (${cart?.items?.length === 1 ?
              '1' + t('product')
              : cart?.items?.length === 2 ? '2' + t('two_product')
                : t('products')
              })`}</span>
            <span>{cart?.totals_data?.subtotal + ' ' + t('SAR')}</span>
          </li>
          {cart?.totals_data?.discount_amount &&
          <li
            className={li_style}>
            <span className='w-9/12'>{t('Saved')}</span>
            <span>{cart?.totals_data?.discount_amount + ' ' + t('SAR')}</span>
          </li>}
          <li
            className={li_style}>
            <span className='w-9/12'>{t('shipping')}</span>
            <span>{cart?.totals_data?.shipping_amount === 0 ?
              <span className='text-green-500'>{t('free')}</span>
              : `${cart?.totals_data?.shipping_amount}  ${t('SAR')}`}</span>
          </li>
          <li
            className={li_style}>
            <span className='w-9/12'>{t('tax')}</span>
            <span>{`${cart?.totals_data?.shipping_amount}  ${t('SAR')}`}</span>
          </li>
          <hr />
          <li
            className={li_style + ' text-lg font-bold '}>
            <span className='w-9/12'>{t('subtotal_include_tax')}</span>
            <span>{`${cart?.totals_data?.subtotal_with_discount} ${t('SAR')}`}</span>
          </li>
        </ul>
        <Button onClick={onClick} text={t('confirm_order')} isDisabled={false } />
      </OuterBox>
      <div className="bg-gray-100 rounded-lg px-4 py-8 text-gray-500 font-bold cursor">
        <div className="flex gap-2 items-baseline ">
          <IoIosLock />
          <span className='text-md'>{t('safe_privacy')}</span>
        </div>
        <p className='py-4'>{t('safe_privacy_desc')}</p>
        <div className="flex items-center justify-evenly">
          <Link href='/'>{t('terms_of_use')}</Link>
          <Link href='/'>{t('terms_of_sell')}</Link>
          <Link href='/'>{t('privacy_policy')}</Link>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary