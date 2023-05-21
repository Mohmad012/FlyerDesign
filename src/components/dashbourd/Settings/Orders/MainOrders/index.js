import {useEffect, useState} from 'react'
import dynamic from 'next/dynamic'
import {handleGetAllOrdersApiRoute} from '@/services/dashbourd/orders/getAllOrders'
import {useQuery} from 'react-query'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from 'next/router'
import {addCurrentOrderComponent} from '@/lib/redux/slices/dashbourd'
const OrdersDetails = dynamic(() => import('./OrdersDetails'), {ssr: false})
const ProductRating = dynamic(() => import('./ProductRating'), {ssr: false})
const DeliveryRating = dynamic(() => import('./DeliveryRating'), {ssr: false})
const SellerRating = dynamic(() => import('./SellerRating'), {ssr: false})

const MainOrders = () => {
  const [rateCompShow, setRateCompShow] = useState({
    name: 'mainOrders',
    id: null,
  })
  const {id: customerId} = useSelector(state => state.user?.user)
  const {locale} = useRouter()
  const dispatch = useDispatch()

  const handleNameWillShowing = (name, id = null, data = []) => {
    dispatch(addCurrentOrderComponent({currentOrderComponent: name, id, data}))
  }

  const getAllOrders = useQuery({
    queryKey: 'getAllOrders',
    queryFn: () =>
      handleGetAllOrdersApiRoute({customerId, pageSize: 20, pageNO: 0, locale}),
    staleTime: 60 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
  })

  useEffect(() => {
    getAllOrders.refetch()
  }, [locale])
  // increment_id
  // updated_at
  // extension_attributes?.product_image
  // name
  // entity_id
  // console.log({getAllOrders: getAllOrders?.data?.response?.data?.items})

  const handleRateCompShow = () => {
    if (rateCompShow?.name === 'mainOrders') {
      return (
        <div className='flex flex-col'>
          <div className='flex flex-col gap-5 items-start'>
            <h2 className='text-xl text-primary-500 font-semibold'>Orders</h2>
            <p className='text-gray-500'>
              View your order history and check the delivery status of products
            </p>
          </div>
          {getAllOrders?.data?.response?.data?.items?.map((item, index) => (
            <OrdersDetails
              index={
                getAllOrders?.data?.response?.data?.items?.length - 1 === index
              }
              key={item?.entity_id}
              entity_id={item?.entity_id}
              increment_id={item?.increment_id}
              updated_at={item?.updated_at}
              data={item?.items}
              allItems={getAllOrders?.data?.response?.data?.items}
              handleNameWillShowing={handleNameWillShowing}
              willShow='DeliveryOrders'
              setRateCompShow={setRateCompShow}
            />
          ))}
        </div>
      )
    } else if (rateCompShow?.name === 'SellerRating') {
      return (
        <SellerRating id={rateCompShow?.id} setRateCompShow={setRateCompShow} />
      )
    } else if (rateCompShow?.name === 'DeliveryRating') {
      return (
        <DeliveryRating
          id={rateCompShow?.id}
          setRateCompShow={setRateCompShow}
        />
      )
    } else {
      return (
        <ProductRating
          id={rateCompShow?.id}
          setRateCompShow={setRateCompShow}
        />
      )
    }
  }

  return <>{handleRateCompShow()}</>
}

export default MainOrders
