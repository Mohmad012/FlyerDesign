import {Fragment} from 'react'
import CharityNo from '../CharityNo'

const OtherSection = ({
  allOrders,
  formattedDate,
  setShowInvoicePopup,
  stepsOtherInfo,
}) => {
  return (
    <>
      {allOrders?.items?.map((item, key) => (
        <Fragment key={key}>
          <div className='flex mb-5 items-start mx-2'>
            <div className='flex flex-col gap-5 items-start w-1/2'>
              <h2 className='text-xl font-semibold text-gray-600'>
                {allOrders?.increment_id}
              </h2>
              <p className='text-gray-500'>{formattedDate()}</p>
            </div>{' '}
            <div className='flex justify-center items-center gap-5  w-1/2'>
              <button
                onClick={() => setShowInvoicePopup(true)}
                className='py-2 px-4 text-sm text-primary-500 ring-1 ring-gray-500 rounded hover:bg-primary-600 hover:text-white'>
                Display the application bill
              </button>
              <button
                // onClick={handleOpenChangeEmailPopup}
                className='py-2 px-4 text-sm text-primary-500 ring-1 ring-gray-500 rounded hover:bg-primary-600 hover:text-white'>
                Download the voucher
              </button>
            </div>
          </div>
          <p className='text-green-900 bg-green-200 px-3 py-3 text-right mx-2'>
            All services have been used in this request
          </p>
          <CharityNo
            productData={item ?? {}}
            workAs='other'
            stepsInfo={stepsOtherInfo}
            charityNo='Nck2355498464'
          />
        </Fragment>
      ))}
    </>
  )
}

export default OtherSection
