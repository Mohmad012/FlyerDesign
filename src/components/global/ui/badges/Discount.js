import Image from 'next/image'
import React from 'react'

const DicountBadge = ({
  positionBxBadge = 'top-0 left-0',
  rotateBxText = '',
  text,
  dicount = 80.0,
  width,
}) => {
  return (
    <>
      {dicount > 0 ? (
        <div className={`absolute ${positionBxBadge}`}>
          <Image
            src='/assets/svgs/dicount.svg'
            width={width || 80}
            height={120}
            alt='bg'
            className='object-contain'
          />
          <div
            className={`flex flex-col justify-center items-center text-white  absolute top-1/3 left-1/2 -translate-x-2/3 -translate-y-1/2 text-center ${rotateBxText}`}>
            <span className={`${width < 90 ? 'text-[10px]' : 'text-sm'}`}>
              {text || ''}
            </span>
            <h2 className={`${width < 90 ? 'text-sm' : 'text-lg'} font-bold`}>
              {+dicount?.toFixed(0) || null}
              <small>%</small>
            </h2>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default DicountBadge
