import {axiosES} from '@/utils/axios-algolia'
import axios from 'axios'
import {toast} from 'react-toastify'

export const handleChangeEmail = async ({data, token, mage}) => {
  let config = {
    method: 'post',
    url: `/customer/changeEmail`,
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
    console.error('⚠️⚠️ CHANGE EMAIL ERROR:', error.message)
    return error.message
  }
}

export const handleChangeEmailApiRoute = async params => {
  const {data, locale} = params
  try {
    const req = await axios.post('/api/dashbourd/accounts/changeemail', {
      data,
      locale,
    })
    if (req.status === 200) toast.success('Changeing Email is Successfully')
    return req.data
  } catch (error) {
    console.error('⚠️⚠️ CHANGE EMAIL IN API ROUTE ERROR:', error.message)
    return error.message
  }
}
