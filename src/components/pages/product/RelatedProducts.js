import React from 'react'
import Title from '@/components/global/Title'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from 'swiper';
import ProductCard from '@/components/global/cards/ProductCard2';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const RelatedProducts = ({ products, title, link, dur}) => {
  const {t} = useTranslation('home')
  return (
    <>
      <div className="flex justify-between items-center">
        <Title title={title || ''} />
        {link && <Link className='text-gray-600 hover:text-gray-500' href={link} >عرض الكل</Link>}
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: dur || 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {
          products && products?.map(({_source: product}, idx) => (
            <SwiperSlide key={idx}>
              <ProductCard

                IsHeader={false}
                Size={'lg'}
                Image={`${process.env.webUrl}/media/catalog/product/${product?.image[0]}`}
                Dicount={(1 - (product?.prices_with_tax?.price / product?.prices_with_tax?.original_price)) * 100}
                DicountText={t('Discount up to')}
                Price={product?.prices_with_tax?.price}
                OldPrice={product?.prices_with_tax?.original_price}
                InfoBadgeText={t('Top rated')}
                Title={product?.name}
                currency={t('sar')}
                ButtonText={t('show')}
                {...product}
              />
            </SwiperSlide>

          )
          )
        }
      </Swiper>
    </>
  )
}

export default RelatedProducts