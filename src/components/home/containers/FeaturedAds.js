import FeaturedAdsCard from '@/components/global/cards/FeaturedAdsCard'
import {UseLang} from '@/hooks/UseLang'
import React from 'react'

const FeaturedAdsContainer = ({data, locale}) => {
  return (
    <div className='c-container'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {data.map(({id, img, english_name, arabic_name}) => (
          <FeaturedAdsCard
            key={id}
            img={img}
            width={800}
            height={400}
            alt={UseLang(locale, arabic_name, english_name)}
            title={UseLang(locale, arabic_name, english_name)}
            className='object-cover hover:scale-[1.03] duration-500 transition-all'
          />
        ))}
      </div>
    </div>
  )
}

export default FeaturedAdsContainer
