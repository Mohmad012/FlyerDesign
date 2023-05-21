import {handleGetAlladdresses} from '@/services/dashbourd/addresses'

export default async function handler(req, res) {
  const {locale, mage} = req.body

  try {
    const response = await handleGetAlladdresses({
      locale,
      mage,
    })
    return res.status(200).json(response)
  } catch (err) {
    return res.status(500).send(`Error delete address ${err}`)
  }
}
