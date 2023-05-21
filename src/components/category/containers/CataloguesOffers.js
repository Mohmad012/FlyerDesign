import Image from 'next/image'
import ProductCard from '@/components/global/cards/ProductCard'
import TitleBx from '@/components/global/cards/TitleBx'
import TagBadge from '@/components/global/ui/badges/Tag'
import {useTranslation} from 'next-i18next'

import {Pagination, Navigation} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'

const CataloguesOffers = ({
  titleColor = 'text-gray-900',
  bgCatalogue = 'bg-white',
  data = [],
  styleBx = '',
  activeLocale,
  router,
}) => {
  const {t} = useTranslation('category')

  return (
    <>
      <TitleBx
        bgBx={bgCatalogue}
        text={t('show_all')}
        titleColor={titleColor}
        title={
          activeLocale?.includes('en') ? data?.english_name : data?.arabic_title
        }
        styleBx={styleBx}
        router={router}
        url={data.all_cat_link}
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
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          className='HomeSlides'>
          {data?.data?.map((product, key) => (
            <SwiperSlide className='flex flex-col justify-center' key={key}>
              <ProductCard
                src={product?.img}
                alt={
                  activeLocale?.includes('en')
                    ? product?.english_name
                    : product?.arabic_name
                }
                classTitleProductCard='titleProductCard'
                classWarningProductCard='warningProductCard'
                titleBadge={
                  activeLocale?.includes('en')
                    ? product?.english_label
                    : product?.arabic_label
                }
                title={
                  activeLocale?.includes('en')
                    ? product?.english_name
                    : product?.arabic_name
                }
                warning={`${t(
                  'Offer_ends_until'
                )} ${product?.expire?.replaceAll('-', '/')}`}
                haveFav={false}
                haveBadge={product?.english_label || product?.arabic_label}
                url={product?.url}
                borderBadgeColor='ring-2 ring-primary-500'
                bgBadgeColor='bg-white'
                hoverBgBadgeColor='hover:bg-primary-600'
                hoverTextBadgeColor='hover:text-white'
                hoverBorderBadgeColor='hover:border-transparent'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default CataloguesOffers
