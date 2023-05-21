import React from 'react'
import Product from '../Product'
import Rating from '../Rating'

const Item = ({customeClass = ''}) => {
  return (
    <div
      className={`p-3 ring-1 w-full ring-gray-300 rounded-lg pb-10 mt-10 flex flex-col items-start gap-5 px-5 ${customeClass}`}>
      <h2>تم توصيله يوم الجُمُعة, مارس 17</h2>
      <hr className='w-full bg-gray-300 h-[0.1rem]' />
      <Product title='Dell desktop 128 GB 8 RAM 132 GB storage' />
      <hr className='w-full bg-gray-200 h-[0.2rem]' />
      <div className='w-full flex items-center gap-5'>
        <h2>كيف كانت تجربة التوصيل</h2>
        <Rating />
      </div>
    </div>
  )
}

export default Item
