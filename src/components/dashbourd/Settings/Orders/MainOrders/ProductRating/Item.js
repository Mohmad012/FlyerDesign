import {useState} from 'react'
import Product from '../Product'
import Rating from '../Rating'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'
import {handleCreateReviewProductApiRoute} from '@/services/dashbourd/orders/reviews/product'

const Item = ({customeClass = ''}) => {
  const {locale} = useRouter()
  const [rating, setRating] = useState(0)
  const [indicator, setIndicator] = useState(false)
  const {firstname, id} = useSelector(state => state.user?.user)
  const handleIndicator = () => setIndicator(prev => !prev)
  const handleSubmit = async e => {
    e.preventDefault()
    const data = {
      review: {
        title: e.target.title.value,
        detail: e.target.rateDetails.value,
        nickname: indicator ? 'unknown' : firstname,
        ratings: [
          {
            rating_name: 'Rating',
            value: rating,
          },
        ],
        review_entity: 'product',
        review_status: 2,
        entity_pk_value: id,
      },
    }

    try {
      await handleCreateReviewProductApiRoute({
        data,
        locale,
      })
    } catch (err) {}
  }
  return (
    <form
      onSubmit={handleSubmit}
      className={`p-3 ring-1 w-full ring-gray-500 rounded-lg pb-10 mt-10 flex flex-col items-start gap-5 ${customeClass}`}>
      <Product title='Dell desktop 128 GB 8 RAM 132 GB storage' />
      <span className='w-full bg-gray-300 h-[0.1rem]' />
      <div className='w-full flex items-center gap-5'>
        <h2>ما هو تقييمك للمنتج؟</h2>
        <Rating rating={rating} setRating={setRating} />
      </div>
      <h2>اكتب تقييم للمنتج</h2>

      <div className='w-full'>
        <div className='w-full flex flex-col items-start gap-5'>
          <h2 className={`w-1/6 ${locale?.includes('ar') && 'text-right'}`}>
            اضف عنوان
          </h2>
          <input
            type='text'
            className='w-full border-0 ring-1 ring-gray-300 rounded-md'
            placeholder='ما الذي تريد تسليط الضوء عليه'
            name='title'
          />
        </div>
      </div>

      <div className='w-full'>
        <div className='w-full flex flex-col items-start gap-5'>
          <h2 className={`w-1/6 ${locale?.includes('ar') && 'text-right'}`}>
            أضف تقييم
          </h2>
          <textarea
            className='w-full border-0 ring-1 ring-gray-300 rounded-md'
            placeholder='كيف كانت تجربتك مع هذا البائع ؟ ساعدهم في معرفه ماذا اعجبك وماذا يمكن تحسينه؟'
            name='rateDetails'
          />
        </div>
      </div>
      <div className='flex justify-between items-center w-full'>
        <div className='flex gap-5'>
          <div className='flex gap-3'>
            <h2 className='text-gray-500'>مجهول</h2>
            <label className='switchBottonBox'>
              <input
                type='checkbox'
                value={indicator}
                onClick={handleIndicator}
              />
              <span></span>
              <i className='indicator'></i>
            </label>
          </div>
          <h2 className='text-gray-500 border-r border-gray-300 px-5'>
            سيتم النشر بأسم{' '}
            <span className='font-semibold'>
              {indicator ? 'unknown' : firstname}
            </span>
          </h2>
        </div>
        <div className='bg-white  py-2 h-16 flex items-center justify-start gap-4 relative'>
          <button
            type='submit'
            // onClick={() => handleNameWillShowing('DeliveryOrders')}
            className='w-52 bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-500'>
            ارسال التقييم
          </button>
        </div>
      </div>
    </form>
  )
}

export default Item
