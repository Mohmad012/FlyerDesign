import {localeHandShake} from '@/services/global'
import {handleSearch} from '@/services/header'

export default async function handler(req, res) {
  const word = req.body.word
  const locale = req.body.locale
  try {
    const resToken = await localeHandShake(locale)
    const searchedProducts = await handleSearch({
      token: resToken.token,
      word,
    })

    return res.json(searchedProducts)
  } catch (err) {
    return res.status(500).send('Error when sorting or filter products')
  }
}
