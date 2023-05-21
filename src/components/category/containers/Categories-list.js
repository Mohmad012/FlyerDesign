import CategoryCard from '@/components/global/cards/CategoryCard'
import {useTranslation} from 'next-i18next'
import React from 'react'

const CatagoriesCarousel = ({data}) => {
  console.log('data', data)
  const {length} = data
  const gridCols =
    length === 4
      ? 'lg:grid-cols-4'
      : length === 3
      ? 'lg:grid-cols-3'
      : length === 2
      ? 'lg:grid-cols-2'
      : 'lg:grid-cols-1'
  return (
    <div className='mx-auto max-w-7xl py-10 px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8'>
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols} gap-2`}>
        {data?.map((slide, idx) => (
          <div
            key={idx}
            className={`rounded-lg 'h-32' ${
              length < 3 ? 'md:h-40' : 'md:h-60'
            } sm:h-40 overflow-hidden`}>
            <CategoryCard url={slide} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CatagoriesCarousel
