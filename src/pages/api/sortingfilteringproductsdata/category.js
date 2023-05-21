import {getSortedFilteredProductsData} from '@/services/category'
import {localeHandShake} from '@/services/global'

export default async function handler(req, res) {
  const locale = req.body.locale
  const url = req.body.url

  try {
    const resToken = await localeHandShake(locale)
    const productsFilteredSorted = await getSortedFilteredProductsData({
      token: resToken.token,
      url,
    })

    return res.json({productsFilteredSorted})
  } catch (err) {
    return res.status(500).send('Error when sorting or filter products')
  }
}
