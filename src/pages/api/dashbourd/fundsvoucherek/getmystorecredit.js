import {handleGetMyStoreCredit} from '@/services/dashbourd/fundsVoucherek'

export default async function handler(req, res) {
  const mage = req.cookies.mage
  const token = req.cookies.token
  try {
    const response = await handleGetMyStoreCredit({
      token,
      mage,
    })

    return res.status(200).json({
      data: response?.data,
    })
  } catch (err) {
    return res.status(500).send(`Error Get My Store Credit ${err}`)
  }
}
