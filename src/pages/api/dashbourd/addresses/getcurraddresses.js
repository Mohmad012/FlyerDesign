import {handleGetCurraddresses} from '@/services/dashbourd/addresses'

export default async function handler(req, res) {
  const {locale, mage, id} = req.body
  try {
    const response = await handleGetCurraddresses({
      locale,
      mage,
      id,
    })

    return res.status(200).json({
      ...response,
      msgRoute: 'getting all addresses successfully',
    })
  } catch (err) {
    return res.status(500).send(`Error delete address ${err}`)
  }
}
