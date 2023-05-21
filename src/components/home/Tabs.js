import {useRouter} from 'next/router'
import {Tab} from '@headlessui/react'
import {Fragment, useEffect, useRef} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation} from 'swiper'
import ProductCard from '../global/cards/ProductCard2'
import 'swiper/css'
import 'swiper/css/navigation'
import {UseLang} from '@/hooks/UseLang'
import Button from '../global/ui/buttons/Button'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs({data, t}) {
  const {locale} = useRouter()
  const siwperRef = useRef()
  useEffect(() => {
    siwperRef.current.swiper.rtlTranslate = locale.includes('ar')
    siwperRef.current.swiper.rtl = locale.includes('ar')
  }, [locale])

  const [tabsTitles, tabsProducts] = data

  const productsTabs = tabsTitles.map(tab => {
    const productSkus = tab.skus
    const products = tabsProducts.filter(product =>
      productSkus.some(sku => sku === product?._source?.sku)
    )
    return {...tab, products}
  })

  return (
    <div className='c-container'>
      <section aria-labelledby='features-heading' className='mx-auto'>
        <div className='mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0'>
          <Tab.Group as='div' className='mt-4'>
            <div className='-mx-4 flex overflow-x-auto sm:mx-0'>
              <div className='flex items-center justify-between w-full border-b border-gray-200 px-4 sm:px-0'>
                <Tab.List className='-mb-px flex overflow-x-scroll no-scrollbar space-x-10 w-10/12'>
                  {productsTabs.map(tab => (
                    <Tab
                      key={tab.type}
                      className={({selected}) =>
                        classNames(
                          selected
                            ? 'border-primary-500 text-primary-600'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                          'whitespace-nowrap border-b-2 py-6 px-2 mx-2 text-sm outline-none  w-full sm:w-auto font-bold'
                        )
                      }>
                      {UseLang(locale, tab.arabic_title, tab.english_title)}
                    </Tab>
                  ))}
                </Tab.List>
                <Button text={t('show_all')} />
              </div>
            </div>

            <Tab.Panels as={Fragment}>
              {productsTabs.map(tab => (
                <Tab.Panel key={tab.type} className='mt-12'>
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
                    className='c-swiper'
                    dir='auto'>
                    {tab.products.map(({_source: product}, idx) => (
                      <SwiperSlide key={idx} className=''>
                        <ProductCard
                          key={product.sku}
                          IsHeader={false}
                          Size={'lg'}
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
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  )
}
