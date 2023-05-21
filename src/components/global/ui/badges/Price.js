import Image from 'next/image'
import React from 'react'

const PriceBadge = ({price, oldPrice, currency, classNames}) => {
  return (
    <div
      style={{backgroundImage: "url('/assets/svgs/price.svg')"}}
      className={`absolute bottom-0 right-0 w-32 h-[50px] bg-cover bg-no-repeat text-center ${classNames}`}>
      <div className='flex flex-col justify-center items-center text-white h-full'>
        <h2 className='font-bold'>
          {price} <small>{currency}</small>
        </h2>
        {(oldPrice && oldPrice !== price)  ? (
          <span className='text-[12px] line-through'>
            {oldPrice || 0} {currency}
          </span>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default PriceBadge
