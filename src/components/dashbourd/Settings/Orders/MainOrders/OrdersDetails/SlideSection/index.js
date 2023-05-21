import Image from 'next/image'
import {useRouter} from 'next/router'

const SlideSection = ({text, imageSrc}) => {
  const {locale} = useRouter()

  return (
    <div className='flex flex-col justify-center'>
      <div className='flex items-center justify-center gap-5'>
        <div className='flex items-center text-right w-1/3'>
          <h2
            className={`text-sm ${
              locale?.includes('en') ? 'text-right' : 'text-left'
            }`}>
            {text}
          </h2>
        </div>
        <div className='w-1/3'>
          <div className='flex flex-col h-full items-center justify-center'>
            <div className='w-full'>
              <Image
                src={imageSrc}
                alt='product'
                width={100}
                height={100}
                className='w-full'
              />
            </div>
            <div className='flex justify-center w-full'>
              <div className='w-20 h-6 flex items-center justify-center px-1 py-2 bg-gray-400 text-white text-center'>
                Sent
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlideSection
