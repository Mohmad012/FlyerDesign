import {useRouter} from 'next/router'
import {useEffect, useRef} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import ProductCard from '../cards/ProductCard2'
import Title from '../Title'
const ProductsCarousel = ({data = [], t, title = '', size}) => {
  const {locale} = useRouter()
  const siwperRef = useRef()
  useEffect(() => {
    siwperRef.current &&
      (() => {
        siwperRef.current.swiper.rtlTranslate = locale.includes('ar')
        siwperRef.current.swiper.rtl = locale.includes('ar')
      })()
  })
  return (
    <>
      {Array.isArray(data) && data?.length && (
        <div>
          <Title title={t(title)} />
          <Swiper
            ref={siwperRef}
            slidesPerView='auto'
            slidesPerGroup={3}
            spaceBetween={10}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className=''
            dir={`${locale.includes('ar') ? 'rtl' : 'ltr'}`}>
            {Array.isArray(data) &&
              data?.length &&
              data?.map(({_source: product}) => (
                <SwiperSlide key={product.sku} className=''>
                  <ProductCard
                    key={product.sku}
                    Size={size || 'lg'}
                    Image={`${process.env.NEXT_PUBLIC_IMAGE_BASEURL}/media/catalog/product/${product?.image[0]}`}
                    Dicount={
                      (1 -
                        product?.prices_with_tax?.price /
                          product?.prices_with_tax?.original_price) *
                      100
                    }
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
              ))}
          </Swiper>
        </div>
      )}
    </>
  )
}

export default ProductsCarousel
