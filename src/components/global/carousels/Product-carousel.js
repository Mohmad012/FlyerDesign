import Image from 'next/image'
import React, {useState} from 'react'
import LeftArrowIcon from '@/components/icons/LeftArrowIcon'
import RightArrowIcon from '@/components/icons/RightArrowIcon'
import {useRouter} from 'next/router'

const ProductCarousel = ({
  data,
  className = '',
  styles = {},
  onClick,
  children,
}) => {
  const {locale} = useRouter()
  const [active, setactive] = useState(0)
  const imageGallery =
    data?._media_?.image?.length &&
    data?._media_?.image.map(img => ({
      ...img,
      title: data.name,
    }))

  function next() {
    active < imageGallery?.length - 1
      ? setactive(prev => prev + 1)
      : setactive(0)
  }
  function prev() {
    if (active === 0) {
      setactive(imageGallery?.length - 1)
    } else {
      setactive(active - 1)
    }
  }

  return (
    <div
      className={`mb-0 relative overflow-hidden ${className}`}
      style={styles}>
      <Image
        onClick={onClick}
        src={
          imageGallery
            ? imageGallery[active]?.image
            : '/assets/imgs/products/no-product.png'
        }
        width={imageGallery ? imageGallery[active]?.width : 800}
        height={imageGallery ? imageGallery[active]?.height : 800}
        alt={imageGallery ? imageGallery[active]?.title[0] : ''}
        className='object-cover object-center w-full h-full min-h-[500px] cursor-pointer'
      />

      {imageGallery && imageGallery?.length > 1 && (
        <div
          className={`flex ${
            locale.includes('ar') && 'flex-row-reverse'
          } justify-between w-full items-center absolute top-1/3 md:top-1/2 left-0 z-30`}>
          <div
            onClick={() => next()}
            className='bg-primary-500 text-white rounded-r-lg p-3  cursor-pointer hover:bg-primary-600'>
            <LeftArrowIcon width={20} />
          </div>
          <div
            onClick={() => prev()}
            className='bg-primary-500 text-white rounded-l-lg p-3  cursor-pointer hover:bg-primary-600'>
            <RightArrowIcon width={20} />
          </div>
        </div>
      )}
      <div className='absolute bottom-4 left-4 flex gap-2'>
        {imageGallery &&
          imageGallery?.length > 1 &&
          imageGallery?.map((slide, idx) => (
            <div
              key={idx}
              className={`w-20 h-16 ring-2  hover:ring-primary-500 duration-700 transition-all rounded-md overflow-hidden ${
                active === idx ? 'ring-primary-500' : 'ring-slate-50'
              }`}>
              <Image
                onClick={() => setactive(idx)}
                src={slide?.image}
                alt={slide?.title[0]}
                width={200}
                height={120}
              />
            </div>
          ))}
      </div>
      {children}
    </div>
  )
}
export default ProductCarousel
