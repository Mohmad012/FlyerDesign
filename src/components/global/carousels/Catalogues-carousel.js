import ClockIcon from '@/components/icons/ClockIcon'
import { UseLang } from '@/hooks/UseLang'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Title from '../Title'

const CataloguesCarousel = ({data, locale, t}) => {
  const siwperRef = useRef()
  useEffect(() => {
    siwperRef.current.dir = locale.includes('ar') ? 'rtl' : 'ltr'
  }, [locale])
  return (
      <Swiper
        ref={siwperRef}
        slidesPerView='auto'
        slidesPerGroup={3}
        spaceBetween={20}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          500: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          800: {
            slidesPerView: 3,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className='c-swiper py-4 bg-transparent'
        dir='auto'>
        {data.map(product => (
          <SwiperSlide key={product.img} className='shadow-xl relative rounded-md overflow-hidden '>
            <div className="w-full max-w-[350px]">
              <div className="h-64 overflow-hidden relative">
                <Image
                  src={product.img}
                  width={500}
                  height={500}
                  alt={UseLang(locale, product.arabic_name, product.english_name)}
                  title={UseLang(locale, product.arabic_name, product.english_name)}
                  className='object-fill h-full w-full' />
                  <div className="absolute bottom-2 left-2 text-[11px] font-bold text-primary-500 ring-1 ring-primary-500 bg-gray-200 px-3 pt-1 pb-2 rounded-full">
                  {UseLang(locale, product.arabic_label, product.english_label)}
                  </div>
              </div>
              <div className="bg-white py-3 px-2">
                <Title title={UseLang(locale, product.arabic_name, product.english_name)} style='text-sm py-px my-px calmp-1' />
                <div className="flex gap-2 text-xs text-primary-500 mt-2 mb-3">
                  <ClockIcon width={14} />
                  <span className='font-bold'>{t('expired after')}: {product.expire}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  )
}

export default CataloguesCarousel