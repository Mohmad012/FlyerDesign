import Image from 'next/image'
import React from 'react'
import Product from '../Product'
import Rating from '../Rating'
import {useRouter} from 'next/router'

const Item = ({customeClass = ''}) => {
  const {locale} = useRouter()
  return (
    <div
      className={`p-3 ring-1 w-full ring-gray-500 rounded-lg pb-10 mt-10 flex flex-col items-start gap-5 ${customeClass}`}>
      <div className='flex items-center gap-3'>
        <Image
          width={65}
          height={65}
          src='/assets/images/dashboard/orders/extra.jpg'
          alt='Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.'
          className='h-10 w-10 flex-none rounded-md bg-gray-200 object-cover object-center'
        />
        <h2>Extra</h2>
      </div>
      <h2>العنصر الذي تم شراؤه من هذا البائع:</h2>
      <Product title='Dell desktop 128 GB 8 RAM 132 GB storage' />
      <div className='flex items-center gap-3'>
        <h2>هل وجدت العناصر كما تم وصفها من قِبل البائع؟</h2>
        <div className='flex gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            fill='none'
            viewBox='0 0 73 73'>
            <circle cx='36.5' cy='36.5' r='36' stroke='#EB008C'></circle>
            <path
              stroke='#EB008C'
              strokeMiterlimit='10'
              strokeWidth='1.5'
              d='M30.598 47.995l4.391 3.4c.567.566 1.842.85 2.692.85h5.383c1.7 0 3.542-1.276 3.967-2.975l3.4-10.342c.708-1.983-.567-3.683-2.692-3.683h-5.666c-.85 0-1.559-.709-1.417-1.7l.708-4.534c.284-1.275-.566-2.691-1.841-3.116-1.134-.425-2.55.141-3.117.991l-5.808 8.642'></path>
            <path
              stroke='#EB008C'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='M23.371 47.997V34.114c0-1.984.85-2.692 2.833-2.692h1.417c1.983 0 2.833.708 2.833 2.692v13.883c0 1.983-.85 2.691-2.833 2.691h-1.417c-1.983 0-2.833-.708-2.833-2.691z'></path>
          </svg>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40 '
            height='40  '
            fill='none'
            viewBox='0 0 73 73'>
            <circle cx='36.5' cy='36.5' r='36' stroke='#EB008C'></circle>
            <path
              stroke='#EB008C'
              strokeMiterlimit='10'
              strokeWidth='1.5'
              d='M43.405 30.004l-4.392-3.4c-.566-.567-1.841-.85-2.691-.85h-5.384c-1.7 0-3.541 1.275-3.966 2.975l-3.4 10.342c-.709 1.983.566 3.683 2.691 3.683h5.667c.85 0 1.558.708 1.417 1.7l-.709 4.533c-.283 1.275.567 2.692 1.842 3.117 1.133.425 2.55-.142 3.117-.992l5.808-8.641'></path>
            <path
              stroke='#EB008C'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='M50.63 30.004v13.884c0 1.983-.85 2.691-2.833 2.691H46.38c-1.983 0-2.833-.708-2.833-2.691V30.004c0-1.983.85-2.692 2.833-2.692h1.417c1.983 0 2.833.709 2.833 2.692z'></path>
          </svg>
        </div>
      </div>
      <div className='w-full flex items-center gap-5'>
        <h2>هل وجدت العناصر كما تم وصفها من قِبل البائع؟</h2>
        <Rating />
      </div>
      <div className='w-full'>
        <div className='w-full flex flex-col items-start gap-5'>
          <h2 className={`w-1/6 ${locale?.includes('ar') && 'text-right'}`}>
            اكتب تقييم للبائع
          </h2>
          <textarea
            className='w-full border-0 ring-1 ring-gray-300 rounded-md'
            placeholder='كيف كانت تجربتك مع هذا البائع ؟ ساعدهم في معرفه ماذا اعجبك وماذا يمكن تحسينه؟'
          />
        </div>
      </div>
      <div className='flex justify-between items-center w-full'>
        <div className='flex gap-5'>
          <div className='flex gap-3'>
            <h2 className='text-gray-500'>مجهول</h2>
            <label className='switchBottonBox'>
              <input type='checkbox' />
              <span></span>
              <i className='indicator'></i>
            </label>
          </div>
          <h2 className='text-gray-500 border-r border-gray-300 px-5'>
            سيتم النشر بأسم <span className='font-semibold'>Amira</span>
          </h2>
        </div>
        <div className='bg-white  py-2 h-16 flex items-center justify-start gap-4 relative'>
          <button
            // onClick={() => handleNameWillShowing('DeliveryOrders')}
            className='w-52 bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-500'>
            ارسال التقييم
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item
