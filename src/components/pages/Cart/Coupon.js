import React, { useRef } from 'react'
const Coupon = ({ onClick: onSubmit, text, hasCoupon, coupon_code }) => {
  const couponRef = useRef()
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      onSubmit(couponRef.current.value)
    }} className='flex justify-between items-center rounded-md overflow-hidden bg-white'>
      <input
        disabled={hasCoupon}
        ref={couponRef}
        className='w-9/12 h-12 ring-2 :ring-inset focus:ring-inset ring-transparent border-none focus:ring-primary-500 rounded-md disabled:opacity-50'
        type="text"
        defaultValue={hasCoupon ? coupon_code :  ''}
        placeholder='كود الخصم'  />
      <button type="submit" className='bg-primary-600 w-3/12 h-12 hover:bg-primary-500 text-white rounded-md'>
        {
          hasCoupon ? text.remove : text.apply
        }


        </button>
    </form>
  )
}

export default Coupon