import {UseLang} from '@/hooks/UseLang'
import Image from 'next/image'
import React from 'react'

const CategoryCard = ({url, arabic_name, english_name, locale}) => {
  const title =
    locale &&
    arabic_name &&
    english_name &&
    UseLang(locale, arabic_name, english_name)
  return (
    <div className='relative h-full flex items-center md:items-start overflow-hidden'>
      <h1 className='leading-tight drop-shadow-2xl font-bold text-white text-4xl md:w-2/3 z-10 p-4'>
        {title}
      </h1>
      <Image
        src={url}
        alt={title || url}
        width={412}
        height={412}
        className=' absolute top-0 right-0 w-full h-full z-0 object-cover'
      />
    </div>
  )
}

export default CategoryCard
