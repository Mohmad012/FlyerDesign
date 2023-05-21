import Image from 'next/image'
import {useRouter} from 'next/router'
import React from 'react'

const Details = () => {
  const {locale} = useRouter()
  return (
    <div className='p-3 ring-1 w-full ring-gray-500 rounded-lg pb-10 mt-10'>
      <div className='flex justify-between pb-7'>
        <div className='flex flex-col items-center gap-1'>
          <h2 className='text-gray-700 font-semibold'>RAEGF300014295-1</h2>
          <p className='text-gray-500 text-sm'>Created March 17, 2023</p>
        </div>
        <div className='flex flex-col items-center justify-between'>
          <h2 className='text-gray-700 font-semibold w-full text-right'>
            receiving address
          </h2>
          <p
            className='text-gray-500 text-sm flex flex-col  text-right'
            dir='ltr'>
            <span>2715 Ash Dr. San Jose, South Dakota 83475</span>
            <span>+201000000000</span>
          </p>
        </div>
      </div>{' '}
      <div className='flex justify-between border-t border-gray-300 pt-7'>
        <h3 className='flex items-center justify-between'>
          <div className='text-primary-500 font-semibold'>
            <div className='flex gap-5'>
              <Image
                width={65}
                height={65}
                src='/assets/imgs/products/03.png'
                alt='Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.'
                className='h-40 w-40 flex-none rounded-md bg-gray-200 object-cover object-center'
              />
              <div className='flex flex-col justify-start space-y-4'>
                <div
                  className={`space-y-1 text-sm font-medium ${
                    locale?.includes('ar') && 'text-right'
                  }`}>
                  <h3 className='text-gray-900'>
                    Dell desktop 128 GB 8 RAM 132 GB storage
                  </h3>
                  <p className='text-gray-500 py-5'>
                    1 product sold by Extra Store
                  </p>
                  <p className='text-gray-900 font-bold'>1800 SAR</p>
                  {/* <p className='text-gray-500'>{product.size}</p> */}
                </div>
              </div>
            </div>
          </div>
        </h3>
        <div className='flex flex-col gap-5 mx-5'>
          <div className='flex gap-1 '>
            <span>I no longer need the product - I changed my mind</span>
            <span className='text-gray-400'>:Reason</span>
          </div>
          <div className='flex items-center gap-1'>
            <button className='bg-transparent border-2 border-gray-400 rounded-lg text-green-500 px-4 py-2'>
              approved
            </button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              fill='none'
              viewBox='0 0 32 32'>
              <path
                fill='#7A7A7A'
                d='M17.5 22.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM16 9c-2.758 0-5 2.019-5 4.5v.5a1 1 0 002 0v-.5c0-1.375 1.346-2.5 3-2.5s3 1.125 3 2.5-1.346 2.5-3 2.5a1 1 0 00-1 1v1a1 1 0 002 0v-.09c2.28-.419 4-2.238 4-4.41 0-2.481-2.242-4.5-5-4.5zm13 7A13 13 0 1116 3a13.014 13.014 0 0113 13zm-2 0a11 11 0 10-11 11 11.012 11.012 0 0011-11z'></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
