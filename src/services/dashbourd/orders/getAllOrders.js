import {axiosES} from '@/utils/axios-algolia'
import axios from 'axios'

export const handleGetAllOrders = async ({
  customerId,
  pageSize,
  pageNO,
  token,
  mage,
}) => {
  let config = {
    method: 'get',
    url: `customer/orders/${customerId}/${pageSize}/${pageNO}`,
    headers: {
      Authorization: `Bearer ${token}`,
      mage: `Bearer ${mage}`,
    },
  }
  try {
    const req = await axiosES.request(config)
    return req.data
  } catch (error) {
    console.error('⚠️⚠️ GETTING ALL ORDERS ERROR:', error.message)
    return error.message
  }
}

export const handleGetAllOrdersApiRoute = async params => {
  const {customerId, pageSize, pageNO, locale} = params

  try {
    const req = await axios.post('/api/dashbourd/orders/getallorders', {
      customerId,
      pageSize,
      pageNO,
      locale,
    })
    return req.data
  } catch (error) {
    console.error('⚠️⚠️ GETTING ALL ORDERS IN API ROUTE ERROR:', error.message)
    return error.message
  }
}
