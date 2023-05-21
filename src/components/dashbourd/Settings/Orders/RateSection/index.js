import {useRouter} from 'next/router'

const RateSection = ({title, text, customClass = 'mb-5'}) => {
  const {locale} = useRouter()
  return (
    <div
      className={`flex justify-between items-center w-full p-3 ring-1 ring-gray-500 rounded-lg pb-5 ${customClass}`}>
      <div className='flex flex-col items-start'>
        <h2
          className={`text-gray-800 ${locale?.includes('ar') && 'text-right'}`}>
          {title}
        </h2>
        <p className='text-gray-400 text-sm'>{text}</p>
      </div>
      {locale?.includes('en') ? (
        <svg
          // onClick={() => setWillShow(willShow)}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6 cursor-pointer'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 4.5l7.5 7.5-7.5 7.5'
          />
        </svg>
      ) : (
        <svg
          // onClick={() => setWillShow(willShow)}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6 cursor-pointer'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 19.5L8.25 12l7.5-7.5'
          />
        </svg>
      )}
    </div>
  )
}

export default RateSection
