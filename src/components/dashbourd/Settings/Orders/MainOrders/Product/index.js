import Image from 'next/image'
import {useRouter} from 'next/router'

const Product = ({title, srcImg = '/assets/imgs/products/03.png'}) => {
  const {locale} = useRouter()
  return (
    <div className='flex gap-5 items-center'>
      <Image
        width={65}
        height={65}
        src={srcImg}
        alt='Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.'
        className='h-20 w-20 flex-none rounded-md bg-gray-200 object-cover object-center'
      />
      <div className='flex flex-col justify-start space-y-4'>
        <div
          className={`space-y-1 text-sm font-medium ${
            locale?.includes('ar') && 'text-right'
          }`}>
          <h3 className='text-gray-900'>{title}</h3>
        </div>
      </div>
    </div>
  )
}

export default Product
