import {Dialog, Transition} from '@headlessui/react'
import {MagnifyingGlassIcon} from '@heroicons/react/20/solid'
import {useRouter} from 'next/router'
import {Fragment, useState, useEffect} from 'react'
import SortBox from './SortBox'
import SuggestionFilterBox from './SuggestionFilterBox'
import {handleSearchApiRoute} from '@/services/header'
import {hadleFilterStructureData} from '@/utils/global/functions'
import {fetchSortingFilteringProductsData} from '@/services/category'
import {useTranslation} from 'next-i18next'

const SearchBox = ({
  data = [
    {
      key: 'sortBy=position&sortDir=DESC',
      label: 'best_seller',
    },
    {
      key: 'sortBy=price&sortDir=ASC',
      label: 'price_low_to_high',
    },
    {
      key: 'sortBy=price&sortDir=DESC',
      label: 'price_high_to_low',
    },
  ],
}) => {
  const [showSearchBoxModal, setShowSearchBoxModal] = useState(false)
  const [inputSearchValue, setInputSearchValue] = useState('')
  const [products, setProducts] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const [filterBy, setFilterBy] = useState([])
  const [currentFilterKeys, setCurrentFilterKeys] = useState('')
  const [currentSortKeys, setCurrentSortKeys] = useState(data[0]?.key)

  const {locale: activeLocale} = useRouter()
  const {t} = useTranslation('common')

  useEffect(() => {
    if (showSearchBoxModal) {
      const debounceTimeout = setTimeout(() => {
        const fetchProductsBySearchWord = async () => {
          try {
            const res = await handleSearchApiRoute({
              word: inputSearchValue,
              locale: activeLocale,
            })

            setProducts(res?.products)
            setSuggestions(res?.suggestions?.product_suggestions[0]?.options)
            setFilterBy(hadleFilterStructureData(res))
          } catch (error) {
            console.log('Error', error)
          }
        }
        fetchProductsBySearchWord()
      }, 500)

      return () => clearTimeout(debounceTimeout)
    }
  }, [inputSearchValue, activeLocale, showSearchBoxModal])

  const handleInputSearchChange = event => {
    setInputSearchValue(event.target.value)
    setShowSearchBoxModal(true)
    !event.target.value && setProducts([])
  }

  const handleFetchSortedProducts = async (sortedFilteresKeys, type) => {
    let url = ''
    if (type === 'sort') {
      url = `facets/search/${inputSearchValue}?pageSize=29&pageNo=0&${sortedFilteresKeys}&${currentFilterKeys}`
      const res = await fetchSortingFilteringProductsData({
        locale: activeLocale,
        url,
      })

      setProducts(res?.productsFilteredSorted?.products)
      setCurrentSortKeys(sortedFilteresKeys)
      keysSortFilter = `${sortedFilteresKeys}${currentFilterKeys}`
    } else {
      url = `facets/search/${inputSearchValue}?pageSize=29&pageNo=0&${currentSortKeys}`
      let keysFilter = ''

      sortedFilteresKeys.forEach(item => {
        Object.entries(item).forEach(([key, value]) => {
          keysFilter += `&${key}=${value}`
        })
      })

      url += keysFilter
      keysSortFilter = `${currentSortKeys}${keysFilter}`

      const res = await fetchSortingFilteringProductsData({
        locale: activeLocale,
        url,
      })
      setProducts(res?.productsFilteredSorted?.products)
      setCurrentFilterKeys(keysFilter)
    }
  }

  return (
    <>
      <div className='w-full'>
        <div className='relative'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            <MagnifyingGlassIcon
              className='h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
          </div>
          <input
            id='search'
            name='search'
            className='block w-96 rounded-md border-0 ring-1 ring-inset bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:text-gray-900 focus:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 sm:text-sm'
            placeholder={t('Are_you_looking_for')}
            type='text'
            autoComplete='off'
            value={inputSearchValue}
            onChange={handleInputSearchChange}
          />
        </div>
      </div>

      <Transition.Root show={products?.length ? true : false} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          onClose={setShowSearchBoxModal}>
          <div className='min-h-screen px-4 text-center'>
            <div className='fixed top-[2.9rem] inset-0 z-10'>
              <div className='flex items-end justify-center p-4 text-center sm:items-center sm:p-0 '>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 '
                  enterTo='opacity-100 '
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 '
                  leaveTo='opacity-0 '>
                  <Dialog.Panel
                    className={`relative transform flex justify-around w-full max-w-full md:max-w-full rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6`}>
                    <SuggestionFilterBox
                      suggestions={suggestions}
                      filterBy={filterBy}
                      handleFetchSortedProducts={handleFetchSortedProducts}
                      setShowSearchBoxModal={setShowSearchBoxModal}
                    />
                    <SortBox
                      data={data}
                      products={products}
                      setProducts={setProducts}
                      setInputSearchValue={setInputSearchValue}
                      handleFetchSortedProducts={handleFetchSortedProducts}
                    />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default SearchBox
