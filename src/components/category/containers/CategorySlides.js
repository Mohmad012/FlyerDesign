import Image from 'next/image'
import Link from 'next/link'
import {Navigation} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'

const CategorySlidesContainer = ({imagesSlides}) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      pagination={false}
      navigation={true}
      modules={[Navigation]}
      className='CategorySlides'>
      {imagesSlides?.map((item, key) => (
        <SwiperSlide className='flex flex-col justify-center' key={item.id}>
          <Link href={`/category/${item?.parentName}/${item?.url_key}`}>
            <div className='flex flex-col justify-center items-center'>
              <Image
                width={180}
                height={180}
                src={item.img}
                alt={item.name}
                className='object-cover object-center inline-block rounded-[100%]'
              />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CategorySlidesContainer
