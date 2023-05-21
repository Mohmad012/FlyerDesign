import Dropdown from './Dropdown'
import {useState} from 'react'
import SortDropdown from './SortDropdown'
import {useTranslation} from 'next-i18next'
import {fetchSortingFilteringProductsData} from '@/services/category'

const DropdownsSection = ({
  sortFilterData,
  setCurrentProducts,
  setCurrentSortFilterKeys,
  locale,
  pageNo,
  categoryID,
}) => {
  const [filterSettings, setFilterSettings] = useState([])
  const [selected, setSelected] = useState(sortFilterData?.sortBy[0])
  const [currentFilterKeys, setCurrentFilterKeys] = useState('')
  const [currentSortKeys, setCurrentSortKeys] = useState('')

  const {t} = useTranslation('category')

  const handleSortingFilteredProducts = (key, code, type) => {
    let newSettings = []
    if (filterSettings?.find(fv => fv[code] === key)) {
      newSettings = filterSettings.filter(fv => fv[code] !== key)
    } else {
      newSettings = [...filterSettings, {[code]: key}]
    }
    setFilterSettings(newSettings)
    handleFetchSortedProducts(newSettings, type)
  }

  const handleFetchSortedProducts = async (sortedFilteresKeys, type) => {
    let url = ''
    let keysSortFilter = ''
    if (type === 'sort') {
      url = `facets/category/${categoryID}?pageSize=29&pageNo=${pageNo}&${sortedFilteresKeys}&${currentFilterKeys}`
      const res = await fetchSortingFilteringProductsData({locale, url})

      setCurrentProducts(res?.productsFilteredSorted?.products)
      setCurrentSortKeys(sortedFilteresKeys)
      keysSortFilter = `${sortedFilteresKeys}${currentFilterKeys}`
    } else {
      url = `facets/category/${categoryID}?pageSize=29&pageNo=0&${currentSortKeys}`
      let keysFilter = ''

      sortedFilteresKeys.forEach(item => {
        Object.entries(item).forEach(([key, value]) => {
          keysFilter += `&${key}=${value}`
        })
      })

      url += keysFilter
      keysSortFilter = `${currentSortKeys}${keysFilter}`

      const res = await fetchSortingFilteringProductsData({locale, url})
      setCurrentProducts(res?.productsFilteredSorted?.products)
      setCurrentFilterKeys(keysFilter)
    }

    setCurrentSortFilterKeys(keysSortFilter)
  }

  return (
    <div className='flex justify-between gap-5 w-1/2'>
      <SortDropdown
        data={sortFilterData?.sortBy}
        selected={selected}
        setSelected={setSelected}
        handleFetchSortedProducts={handleFetchSortedProducts}
        t={t}
      />
      {sortFilterData?.filterBy?.length ? (
        <Dropdown
          type='filter'
          handleSortingFilteredProducts={handleSortingFilteredProducts}
          nameDropdown={t('filter')}
          dataList={sortFilterData?.filterBy}
          settings={filterSettings}
          t={t}
        />
      ) : (
        ''
      )}
    </div>
  )
}
export default DropdownsSection
