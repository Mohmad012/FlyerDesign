import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FeaturedAdsCard = ({img, alt, title, width, height, className}) => {
  return (
    <Link href='/#' className='overflow-hidden'>
      <Image
        src={img}
        alt={alt}
        width={width}
        height={height}
        title={title}
        className={className}
      />
    </Link>
  )
}

export default FeaturedAdsCard
