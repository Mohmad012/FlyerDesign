import {useRouter} from 'next/router'

const SubTitleRating = ({setRateCompShow, title, subTitle}) => {
  const {locale} = useRouter()
  return (
    <div className='flex flex-col items-start gap-5'>
      <div
        className='flex gap-1 items-center cursor-pointer text-gray-500'
        onClick={() => setRateCompShow({name: 'mainOrders', id: null})}>
        {locale?.includes('en') ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            width='20'
            height='20'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            fill='none'
            viewBox='0 0 32 32'>
            <path
              fill='#666'
              d='M4 16a1 1 0 011-1h19.585l-7.293-7.293a1.001 1.001 0 011.415-1.415l9 9a1.001 1.001 0 010 1.415l-9 9a1 1 0 11-1.415-1.415l7.293-7.293H5a1 1 0 01-1-1z'></path>
          </svg>
        )}

        <span className='capitalize'>Refer to all orders</span>
      </div>
      <div className='flex flex-col gap-3'>
        <h2
          className={`${
            locale?.includes('ar') && 'text-right text-xl font-semibold'
          }`}>
          {title}
        </h2>
        <p className='text-gray-400 text-mb'>{subTitle}</p>
      </div>
    </div>
  )
}

export default SubTitleRating
