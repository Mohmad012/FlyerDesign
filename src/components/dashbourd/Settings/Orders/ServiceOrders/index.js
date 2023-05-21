import CharityNo from '../CharityNo'
import Review from '../Review'
import Invoice from '../Invoice'
import {useRouter} from 'next/router'

const ServiceOrders = ({handleNameWillShowing}) => {
  const {locale} = useRouter()

  const stepsOtherInfo = ['request is done', 'It has been used']
  return (
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
          <div className='flex mb-5 items-start px-2'>
            <div className='flex flex-col gap-5 items-start w-1/2'>
              <h2 className='text-xl font-semibold text-gray-600'>
                NEGF30028875050
              </h2>
              <p className='text-gray-500'>March 22, 2022</p>
            </div>{' '}
            <div className='flex justify-center items-center gap-5  w-1/2'>
              <button
                // onClick={handleOpenChangeEmailPopup}
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
          <p className='text-green-900 bg-green-200 px-3 py-3 mx-2 text-right'>
            All services have been used in this request
          </p>
          <CharityNo
            workAs='other'
            stepsInfo={stepsOtherInfo}
            charityNo='Nck2355498464'
          />
        </div>
        <div className='w-1/3 flex flex-col gap-5 items-start mb-5'>
          <Review />
          <Invoice />
          <div className='flex flex-col items-start mx-2 mt-7 w-full'>
            <div className='p-3 ring-1 w-full ring-gray-500 rounded-lg pb-5 flex flex-col items-start'>
              <h2 className='mb-4'>Payment Method</h2>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='64'
                height='40'
                fill='none'
                viewBox='0 0 64 40'>
                <g clipPath='url(#clip0_731_31113)'>
                  <path fill='#F6F6F6' d='M64 3.602H0v32h64v-32z'></path>
                  <path
                    fill='#265697'
                    fillRule='evenodd'
                    d='M59.2 0h-56C1.6 0 0 1.6 0 3.2V8h64V4.8C64 1.6 62.4 0 59.2 0z'
                    clipRule='evenodd'></path>
                  <path
                    fill='#D97B16'
                    fillRule='evenodd'
                    d='M0 32v3.2C0 38.4 1.6 40 4.8 40h54.4c3.2 0 4.8-1.6 4.8-4.8V32H0z'
                    clipRule='evenodd'></path>
                  <path
                    fill='#265697'
                    fillRule='evenodd'
                    d='M44.648 11.912c-.897-.344-2.303-.713-4.058-.713-4.474 0-7.625 2.302-7.652 5.601-.025 2.44 2.25 3.8 3.967 4.611 1.763.832 2.355 1.363 2.347 2.106-.012 1.137-1.408 1.657-2.709 1.657-1.812 0-2.775-.257-4.262-.89l-.583-.27-.636 3.799c1.058.474 3.013.884 5.044.905 4.759 0 7.848-2.275 7.883-5.798.018-1.93-1.189-3.4-3.8-4.612-1.583-.785-2.552-1.309-2.542-2.104 0-.705.82-1.46 2.593-1.46a8.197 8.197 0 013.388.65l.406.197.614-3.679zM56.257 11.512h-3.498c-1.084 0-1.895.302-2.371 1.407l-6.724 15.554h4.754s.778-2.091.953-2.55l5.798.007c.136.594.551 2.543.551 2.543h4.201l-3.664-16.961zm-5.583 10.94c.375-.979 1.804-4.745 1.804-4.745-.027.045.372-.983.6-1.62l.306 1.463 1.048 4.901h-3.758zM23.7 28.469l2.83-16.973h4.527L28.225 28.47h-4.526zM19.901 11.508L15.47 23.082l-.472-2.352c-.825-2.712-3.396-5.65-6.27-7.12l4.053 14.843 4.79-.005 7.127-16.94h-4.796z'
                    clipRule='evenodd'></path>
                  <path
                    fill='#D97B16'
                    fillRule='evenodd'
                    d='M11.358 11.496h-7.3L4 11.85c5.68 1.405 9.438 4.8 10.998 8.88l-1.587-7.8c-.275-1.075-1.07-1.396-2.053-1.433z'
                    clipRule='evenodd'></path>
                </g>
                <defs>
                  <clipPath id='clip0_731_31113'>
                    <path fill='#fff' d='M0 0H64V40H0z'></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceOrders
