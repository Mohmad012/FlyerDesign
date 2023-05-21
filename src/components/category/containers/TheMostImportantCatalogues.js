import Image from 'next/image'
import TitleBx from '@/components/global/cards/TitleBx'
import {useTranslation} from 'next-i18next'
import {Navigation} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Fragment} from 'react'

const TheMostImportantCatalogues = ({data = [], activeLocale, router, ref}) => {
  const {t} = useTranslation('category')

  return (
    <Fragment ref={ref}>
      <TitleBx
        bgBx='bg-white'
        text={t('show_all')}
        titleColor='text-gray-900'
        title={
          activeLocale?.includes('en') ? data?.english_name : data?.arabic_title
        }
        router={router}
        url={data?.url}
      />
      <div className='c-container'>
        <Swiper
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
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },

            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },

            992: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          }}
          className='HomeSlides'>
          {data?.data?.map((product, key) => (
            <SwiperSlide className='flex flex-col justify-center' key={key}>
              <div
                className={`flex items-center CatalogueVIP justify-${
                  activeLocale?.includes('en') ? 'end' : 'start'
                }`}
                key={product.id}>
                <div className={`order-2 relative`}>
                  <Image
                    src={product?.img}
                    width={500}
                    height={500}
                    alt=''
                    className='h-64 w-64 object-contain'
                  />
                  <span
                    className={` order-1 customNumber customNumber-red absolute ${product.class} text-[22rem] top-[-135px] left-[-56%] font-bold sm:hidden lg:block`}>
                    {key + 1}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fragment>
  )
}

export default TheMostImportantCatalogues
