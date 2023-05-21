import {axiosES} from '@/utils/axios-algolia'
import axios from 'axios'
import {toast} from 'react-toastify'

export const handleGeneralInformation = async ({data, token, mage}) => {
  let config = {
    method: 'post',
    url: `/customer/changeName`,
    headers: {
      Authorization: `Bearer ${token}`,
      mage: `Bearer ${mage}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data),
  }
  try {
    const req = await axiosES.request(config)
    return req.data
  } catch (error) {
    console.error('⚠️⚠️ CHANGE FIRSTNAME, LASTNAME ERROR:', error.message)
    return error.message
  }
}

export const handleGeneralInformationApiRoute = async params => {
  const {data, locale} = params
  try {
    const req = await axios.post('/api/dashbourd/accounts/generalinformation', {
      data,
      locale,
    })
    if (req.status === 200)
      toast.success('Changeing FirstName, LastName is Successfully')
    return req.data
  } catch (error) {
    console.error(
      '⚠️⚠️ CHANGE FIRSTNAME, LASTNAME IN API ROUTE ERROR:',
      error.message
    )
    return error.message
  }
}
