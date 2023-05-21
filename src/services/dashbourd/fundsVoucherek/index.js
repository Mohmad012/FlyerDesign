import axios from 'axios'

export const handleGetMyStoreCredit = async ({token, mage}) => {
  try {
    const req = await axios.get(`${process.env.api_baseurl}/sc`, {
      maxBodyLength: Infinity,
      headers: {
        Authorization: `Bearer ${token}`,
        mage: `Bearer ${mage}`,
      },
    })

    console.log(`handleGetMyStoreCredit req`, req)
    return req.data
  } catch (error) {
    console.error(
      '⚠️⚠️ GETTING MY STORE CREDIT in server side ERROR:',
      error.message
    )
    return error.message
  }
}

export const handleGetMyStoreCreditApiRoute = async params => {
  const {locale} = params

  try {
    const req = await axios.post(
      '/api/dashbourd/fundsvoucherek/getmystorecredit',
      {
        locale,
      }
    )
    return req.data
  } catch (error) {
    console.error(
      '⚠️⚠️ GETTING MY STORE CREDIT IN API ROUTE ERROR:',
      error.message
    )
    return error.message
  }
}
