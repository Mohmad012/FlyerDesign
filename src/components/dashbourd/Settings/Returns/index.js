import Details from './Details'
import {useDispatch} from 'react-redux'
import {
  addCurrentComponent,
  addCurrentOrderComponent,
} from '@/lib/redux/slices/dashbourd'

const Returns = () => {
  const dispatch = useDispatch()

  const handleNameWillShowing = name => {
    dispatch(addCurrentComponent({currentComponent: 'Orders'}))
    dispatch(addCurrentOrderComponent({currentOrderComponent: name}))
  }

  return (
    <>
      <div className='flex flex-col px-1'>
        <div className='flex flex-col gap-5 items-start'>
          <h2 className='text-xl'>Returns</h2>
          <p>
            View returns history, and specify a return for returnable products
          </p>
          <div className='bg-white  py-2 h-16 flex items-center justify-start gap-4 relative'>
            <button
              onClick={() => handleNameWillShowing('DeliveryOrders')}
              className='w-52 bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-500'>
              Create a new Returns
            </button>
          </div>
        </div>
        <Details />
      </div>
    </>
  )
}

export default Returns
