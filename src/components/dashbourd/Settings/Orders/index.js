import dynamic from 'next/dynamic'
const DeliveryOrders = dynamic(() => import('./DeliveryOrders'), {ssr: false})
const MainOrders = dynamic(() => import('./MainOrders'), {ssr: false})
const ServiceOrders = dynamic(() => import('./ServiceOrders'), {ssr: false})
const OrdersFromStore = dynamic(() => import('./OrdersFromStore'), {ssr: false})

import {useDispatch, useSelector} from 'react-redux'
import {addCurrentOrderComponent} from '@/lib/redux/slices/dashbourd'

const Orders = () => {
  const {currentOrderComponent} = useSelector(
    state => state.dashbourd.dashbourdData
  )
  const dispatch = useDispatch()

  const handleNameWillShowing = (name, id = null) => {
    dispatch(addCurrentOrderComponent({currentOrderComponent: name, id}))
  }

  const handleWillShowing = () => {
    if (currentOrderComponent === 'mainOrders') {
      return <MainOrders />
    } else if (currentOrderComponent === 'DeliveryOrders') {
      return <DeliveryOrders handleNameWillShowing={handleNameWillShowing} />
    } else if (currentOrderComponent === 'ServiceOrders') {
      return <ServiceOrders handleNameWillShowing={handleNameWillShowing} />
    } else {
      return <OrdersFromStore handleNameWillShowing={handleNameWillShowing} />
    }
  }
  return <>{handleWillShowing()}</>
}

export default Orders
