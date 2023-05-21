import { localeHandShake } from '@/services/global'

export default async function handler(req, res) {
  const {locale} = req.query
  try {
    const handshake = await localeHandShake(locale)
    return res.json(handshake)
  } catch (err) {
    return res.send('Error Handshake: ' + err.message)
  }
}
