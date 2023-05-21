import {useCallback, useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import dynamic from 'next/dynamic'
import {useSelector} from 'react-redux'
const DeliveryAddressess = dynamic(() => import('./DeliveryAddressess'), {
  ssr: false,
})
const Review = dynamic(() => import('../Review'), {ssr: false})
const Invoice = dynamic(() => import('../Invoice'), {ssr: false})
const InvoicePopup = dynamic(() => import('../InvoicePopup'), {ssr: false})
const DeliverySection = dynamic(() => import('./DeliverySection'), {ssr: false})
const OtherSection = dynamic(() => import('./OtherSection'), {ssr: false})

const DeliveryOrders = ({handleNameWillShowing}) => {
  const [showInvoicePopup, setShowInvoicePopup] = useState(false)
  const [allOrders, setAllOrders] = useState({})
  const {currentOrderID, ordersData} = useSelector(
    state => state.dashbourd.dashbourdData
  )

  useEffect(() => {
    setAllOrders(ordersData[currentOrderID])
  }, [currentOrderID, ordersData])

  const formattedDate = useCallback(() => {
    const date = new Date(allOrders?.updated_at)

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }

    return date.toLocaleDateString('en-US', options)
  }, [allOrders?.updated_at])

  const {locale} = useRouter()
  const stepsDeliveryInfo = [
    'request is done',
    'The request confirmed',
    'charged',
    'sent delivered handed',
  ]
  const stepsOtherInfo = ['request is done', 'It has been used']
  return (
    <>
      <div className='flex flex-col gap-10 '>
        <div
          className='flex gap-1 items-center cursor-pointer text-gray-500'
          onClick={() => handleNameWillShowing('mainOrders')}>
          {locale?.includes('en') ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              width='20'
              height='20'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill='none'
              viewBox='0 0 32 32'>
              <path
                fill='#666'
                d='M4 16a1 1 0 011-1h19.585l-7.293-7.293a1.001 1.001 0 011.415-1.415l9 9a1.001 1.001 0 010 1.415l-9 9a1 1 0 11-1.415-1.415l7.293-7.293H5a1 1 0 01-1-1z'></path>
            </svg>
          )}

          <span className='capitalize'>Refer to all orders</span>
        </div>
        <div className='flex w-full'>
          <div className='w-2/3'>
            <DeliveryAddressess addressessInfo={allOrders?.billing_address} />
            {allOrders?.is_virtual ? (
              <OtherSection
                allOrders={allOrders}
                formattedDate={formattedDate}
                setShowInvoicePopup={setShowInvoicePopup}
                stepsOtherInfo={stepsOtherInfo}
              />
            ) : (
              <DeliverySection
                allOrders={allOrders}
                formattedDate={formattedDate}
                setShowInvoicePopup={setShowInvoicePopup}
                stepsDeliveryInfo={stepsDeliveryInfo}
              />
            )}
          </div>
          <div className='w-1/3 flex flex-col gap-5 items-start mb-5'>
            <Review />
            <Invoice
              subtotal_incl_tax={allOrders?.subtotal_incl_tax}
              shipping_amount={allOrders?.payment?.shipping_amount}
              tax_amount={allOrders?.tax_amount}
              grand_total={allOrders?.grand_total}
            />
            <div className='flex flex-col items-start mx-2 mt-7 w-full'>
              <div className='p-3 ring-1 w-full ring-gray-500 rounded-lg pb-5 flex flex-col items-start'>
                <h2 className='mb-4'>Payment Method</h2>
                {allOrders?.extension_attributes?.payment_additional_info?.map(
                  (item, key) => (
                    <p key={key}>{item?.value}</p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <InvoicePopup open={showInvoicePopup} setOpen={setShowInvoicePopup} />
    </>
  )
}

export default DeliveryOrders
