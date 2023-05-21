import {handleGetAllOrders} from '@/services/dashbourd/orders/getAllOrders'
import {localeHandShake} from '@/services/global'

export default async function handler(req, res) {
  const mage = req.cookies.mage
  const {customerId, pageSize, pageNO, locale} = req.body

  try {
    const {token} = await localeHandShake(locale)
    const response = await handleGetAllOrders({
      customerId,
      pageSize,
      pageNO,
      token,
      mage,
    })

    return res.status(200).json({
      msgRoute: 'Getting All Orders Successfully',
      response,
    })
  } catch (err) {
    return res.status(500).send(`Error Getting All Orders ${err}`)
  }
}
