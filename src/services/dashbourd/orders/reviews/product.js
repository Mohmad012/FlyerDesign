import {axiosES} from '@/utils/axios-algolia'
import axios from 'axios'

export const handleCreateReviewProduct = async ({data, token, mage}) => {
  console.log({token, mage})
  let config = {
    method: 'post',
    url: '/productReviews/add',
    headers: {
      Authorization: `Bearer ${token}`,
      mage: `Bearer ${mage}`,
    },
    data: JSON.stringify(data),
  }
  try {
    const req = await axiosES.request(config)
    return req.data
  } catch (error) {
    console.error('⚠️⚠️ CREATE REVIEW PRODUCT ERROR:', error.message)
    return error.message
  }
}

export const handleCreateReviewProductApiRoute = async params => {
  const {data, locale} = params

  try {
    const req = await axios.post('/api/dashbourd/orders/reviews/product', {
      data,
      locale,
    })
    return req.data
  } catch (error) {
    console.error(
      '⚠️⚠️ CREATE REVIEW PRODUCT IN API ROUTE ERROR:',
      error.message
    )
    return error.message
  }
}
