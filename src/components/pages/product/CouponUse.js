import Title from '@/components/global/Title'
import {UseLang} from '@/hooks/UseLang'
import Image from 'next/image'
import React from 'react'

const CouponUse = ({data, locale, t}) => {
  return (
    <>
      <Title title={t('voucher use')} style='text-xl' />
      <div className='ring-2 ring-primary-500 flex flex-wrap items-center justify-between p-4 rounded-md md:gap-x-4 gap-y-4'>
        {data.map(({id, title, img}) => (
          <div
            key={id}
            className='w-full sm:w-1/2 md:w-1/5 flex flex-col items-center justify-between gap-2 text-center mx-auto font-bold relative'>
            <span className='text-xl text-primary-500'>{id}</span>
            <h3 className='text-gray-700 h-12'>{t(title)}</h3>
            <Image
              src={img}
              width={120}
              height={120}
              alt={t(title)}
              className='mx-auto'
            />
            {id !== data?.length ? (
              <Image
                src={UseLang(
                  locale,
                  '/assets/voucher/l-arrow.png',
                  '/assets/voucher/r-arrow.png'
                )}
                width={48}
                height={48}
                alt={t(title)}
                className={`hidden md:block absolute top-1/2 translate-y-4 ${UseLang(
                  locale,
                  '-left-12',
                  '-right-12'
                )}`}
              />
            ) : (
              ''
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default CouponUse
