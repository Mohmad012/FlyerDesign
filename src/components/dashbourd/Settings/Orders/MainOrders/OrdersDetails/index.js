import {useRouter} from 'next/router'
import React, {useCallback} from 'react'
import SlideSection from './SlideSection'
import ActionButton from './ActionButton'

const OrdersDetails = ({
  data,
  allItems,
  willShow,
  handleNameWillShowing,
  setRateCompShow,
  increment_id,
  updated_at,
  index,
  entity_id,
}) => {
  const {locale} = useRouter()

  const handleSetRateCompShow = name => setRateCompShow({name, id: entity_id})
  const formattedDate = useCallback(() => {
    const date = new Date(updated_at)

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }

    return date.toLocaleDateString('en-US', options)
  }, [updated_at])

  return (
    <div
      className={`w-full ring-1 w-full ring-gray-500 rounded-lg mt-10 px-4 py-10 ${
        index && 'mb-5'
      }`}>
      <div className='flex  items-center justify-between'>
        {locale?.includes('en') ? (
          <svg
            onClick={() => handleNameWillShowing(willShow, entity_id, allItems)}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-10 h-10 cursor-pointer'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 19.5L8.25 12l7.5-7.5'
            />
          </svg>
        ) : (
          <svg
            onClick={() => handleNameWillShowing(willShow, entity_id, allItems)}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-10 h-10 cursor-pointer'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        )}
        <div className='flex w-1/2'>
          <div className='flex items-center'>
            {data?.map(({extension_attributes, name, item_id}) => (
              <SlideSection
                key={item_id}
                imageSrc={`${process.env.webUrl}/media/catalog/product${extension_attributes?.product_image}`}
                text={name}
              />
            ))}
          </div>

          <div
            className={`flex flex-col justify-center ${
              locale?.includes('en') ? 'border-l pl-5' : 'border-r pr-5'
            }  border-gray-300`}>
            <p className='text-xl font-semibold'>{increment_id}</p>
            <p className='text-sm text-gray-500'>Ordered {formattedDate()}</p>
          </div>
        </div>
      </div>
      <div className='flex justify-end gap-3 mt-10 border-t border-gray-300 pt-5 px-5'>
        <ActionButton
          text='Product Rating'
          handleClick={() => handleSetRateCompShow('ProductRating')}
        />
        <ActionButton
          text='Delivery Rating'
          handleClick={() => handleSetRateCompShow('DeliveryRating')}
        />
        <ActionButton
          text='Seller Rating'
          handleClick={() => handleSetRateCompShow('SellerRating')}
        />
      </div>
    </div>
  )
}

export default OrdersDetails
