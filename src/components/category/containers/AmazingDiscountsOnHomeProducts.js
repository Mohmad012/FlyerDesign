import {useLayoutEffect, useRef} from 'react'
import ProductCard from '@/components/global/cards/ProductCard4'
import TitleBx from '@/components/global/cards/TitleBx'
import {useTranslation} from 'next-i18next'
import {Navigation} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import {useRouter} from 'next/router'

const AmazingDiscountsOnHomeProducts = ({
  data = [],
  getAmazingDiscountsOnHomeProductsData,
  activeLocale,
  router,
}) => {
  const {t} = useTranslation('category')
  const {locale} = useRouter()
  const siwperRef = useRef()
  useLayoutEffect(() => {
    siwperRef.current.dir = locale.includes('ar') ? 'rtl' : 'ltr'
    document
      ?.querySelector('.swiper.HomeSlides')
      ?.classList.add('relocationPrevNextBtn')
    siwperRef.current.classList.add('relocationPrevNextBtn')
  }, [locale])

  return (
    <>
      <TitleBx
        bgBx='bg-transparent'
        text={t('show_all')}
        titleColor='text-black'
        title={
          activeLocale.includes('en')
            ? getAmazingDiscountsOnHomeProductsData?.english_name
            : getAmazingDiscountsOnHomeProductsData?.arabic_name
        }
        router={router}
        url={getAmazingDiscountsOnHomeProductsData?.url}
      />
      <div className='c-container'>
        <Swiper
          ref={siwperRef}
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={30}
          pagination={false}
          navigation={true}
          loop={true}
          centeredSlidesBounds={true}
          modules={[Navigation]}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          className={`HomeSlides`}>
          {data?.length ? (
            data?.map(({_source: product}, key) => (
              <SwiperSlide className='flex flex-col justify-center' key={key}>
                <ProductCard
                  Dicount={
                    (1 -
                      product?.prices_with_tax?.price /
                        product?.prices_with_tax?.original_price) *
                    100
                  }
                  DicountText={t('Discount up to')}
                  Size={'lg'}
                  Round={'Round'}
                  IsHeader={'IsHeader'}
                  Image={`${process.env.NEXT_PUBLIC_IMAGE_BASEURL}/media/catalog/product/${product?.image[0]}`}
                  haveImg={true}
                  Price={product?.prices_with_tax?.price}
                  OldPrice={product?.prices_with_tax?.original_price}
                  currency={t('sar')}
                  InfoBadgeText={t('Top rated')}
                  url={product?.url}
                  Title={product?.name}
                  bgInfoBadge='bg-info-500'
                  borderInfoBadge='border-transparent'
                  ButtonText={t('show')}
                />
              </SwiperSlide>
            ))
          ) : (
            <p className='flex justify-center text-[3rem] text-white'>
              there is no products
            </p>
          )}
        </Swiper>
      </div>
    </>
  )
}

export default AmazingDiscountsOnHomeProducts
