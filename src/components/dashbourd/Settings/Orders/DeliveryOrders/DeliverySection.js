import React, {Fragment} from 'react'
import CharityNo from '../CharityNo'

const DeliverySection = ({
  allOrders,
  formattedDate,
  setShowInvoicePopup,
  stepsDeliveryInfo,
}) => {
  return (
    <>
      {allOrders?.items?.map((item, key) => (
        <Fragment key={key}>
          <div className='flex mb-5 items-center justify-between px-2'>
            <div className='flex flex-col gap-5 items-start w-1/2'>
              <h2 className='text-xl font-semibold text-gray-600'>
                {allOrders?.increment_id}
              </h2>
              <p className='text-gray-500'>{formattedDate()}</p>
            </div>{' '}
            <button
              onClick={() => setShowInvoicePopup(true)}
              className='py-2 px-4 text-sm text-primary-500 ring-1 ring-gray-500 rounded hover:bg-primary-600 hover:text-white'>
              Display the application bill
            </button>
          </div>
          <p className='text-green-900 bg-green-200 px-3 py-3 mx-2 text-right'>
            All products have been connected to this request
          </p>
          <CharityNo
            productData={item ?? {}}
            workAs='Delivery'
            stepsInfo={stepsDeliveryInfo}
            charityNo='Nck2355498464'
          />
        </Fragment>
      ))}
    </>
  )
}

export default DeliverySection
