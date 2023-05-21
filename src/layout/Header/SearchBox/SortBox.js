import ProductCard from '@/components/global/cards/ProductCard2'
import {classNames} from '@/utils/global'
import {Listbox, Transition} from '@headlessui/react'
import {CheckIcon, ChevronDownIcon} from '@heroicons/react/20/solid'
import {Fragment, useState} from 'react'
import {useTranslation} from 'next-i18next'

const SortBox = ({
  data,
  products,
  setProducts,
  setInputSearchValue,
  handleFetchSortedProducts,
}) => {
  const {t} = useTranslation('common')
  const [selected, setSelected] = useState(data[0])

  return (
    <div className='w-2/3 p-4 overflow-y-auto h-[87vh]'>
      {products?.length ? (
        <div className='text-md  mb-2 flex'>
          <span className='flex items-center gap-5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              fill='none'
              viewBox='0 0 25 25'>
              <path
                fill='#666'
                d='M3.906 12.5a.781.781 0 01.781-.78h7.032a.781.781 0 110 1.562H4.688a.781.781 0 01-.782-.781zm.781-5.468h5.47a.781.781 0 100-1.563h-5.47a.781.781 0 000 1.563zM17.97 17.969H4.687a.781.781 0 100 1.563H17.97a.78.78 0 100-1.563zm4.459-9.927L18.52 4.135a.781.781 0 00-1.105 0L13.51 8.042a.782.782 0 101.105 1.105l2.572-2.573v7.49a.781.781 0 101.563 0v-7.49l2.572 2.573a.781.781 0 101.106-1.105z'></path>
            </svg>
            <span>{t('sort_by')}</span>
            <Listbox value={selected} onChange={setSelected}>
              <div className='flex justify-center  items-center'>
                <div className='relative w-[10.8rem]'>
                  <Listbox.Button className='cursor-pointer flex relative w-full cursor-default rounded-md bg-transparent py-1.5 pl-3 text-left text-gray-900 shadow-sm  sm:text-sm sm:leading-6'>
                    <span className='block truncate mx-5'>
                      {t(selected?.label)}
                    </span>
                    <span className='pointer-events-none absolute inset-y-0 left-0 flex items-center pr-2'>
                      <ChevronDownIcon
                        className='h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'>
                    <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                      {data.map(item => (
                        <Listbox.Option
                          key={item.id}
                          className={({active}) =>
                            classNames(
                              active
                                ? 'bg-indigo-600 text-white'
                                : 'text-gray-900',
                              'relative cursor-default select-none py-2 pl-3 pr-9 cursor-pointer'
                            )
                          }
                          value={item}>
                          {({selected, active}) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? 'font-semibold' : 'font-normal',
                                  'block truncate'
                                )}
                                onClick={() =>
                                  handleFetchSortedProducts(item.key, 'sort')
                                }>
                                {t(item.label)}
                              </span>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? 'text-white' : 'text-indigo-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                  )}>
                                  <CheckIcon
                                    className='h-5 w-5'
                                    aria-hidden='true'
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </div>
            </Listbox>
          </span>
        </div>
      ) : (
        ''
      )}
      <div className='mt-4 flex gap-5 w-full  '>
        <div className=' flex gap-5 flex-wrap '>
          {products?.map(({_source: product}, idx) => (
            <div className=' flex gap-5  w-80' key={idx}>
              <ProductCard
                IsHeader={false}
                Size='lg'
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
                handleOtherClick={() => {
                  setInputSearchValue('')
                  setProducts([])
                }}
                ButtonText={t('show')}
                {...product}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SortBox
