import {handleCreateReviewProduct} from '@/services/dashbourd/orders/reviews/product'
import {localeHandShake} from '@/services/global'

export default async function handler(req, res) {
  const {data, locale} = req.body
  const mage = req.cookies.mage
  try {
    const {token} = await localeHandShake(locale)

    const response = await handleCreateReviewProduct({
      data,
      token,
      mage,
    })

    return res.status(200).json({
      // msgRoute: 'Create Review Product Successfully',
      msg: response,
      // data,
    })
  } catch (err) {
    return res.status(500).send(`Error Create Review Product ${err}`)
  }
}
