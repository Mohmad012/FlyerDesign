import {axiosES} from '@/utils/axios-algolia'
import axios from 'axios'
import {toast} from 'react-toastify'

export const handleChangePassword = async ({data, token, mage}) => {
  let config = {
    method: 'post',
    url: `/customer/changePassword`,
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
    console.error('⚠️⚠️ CHANGE PASSWORD ERROR:', error.message)
    return error.message
  }
}

export const handleChangePasswordApiRoute = async params => {
  const {data, locale} = params

  try {
    const req = await axios.post('/api/dashbourd/accounts/changepassword', {
      data,
      locale,
    })
    if (req.status === 200) toast.success('Changeing Password is Successfully')
    return req.data
  } catch (error) {
    console.error('⚠️⚠️ CHANGE PASSWORD IN API ROUTE ERROR:', error.message)
    return error.message
  }
}
