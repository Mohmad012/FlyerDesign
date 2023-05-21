import {localeHandShake} from '@/services/global'
import {handleLogin} from '@/services/header'

export default async function handler(req, res) {
  const {username, password, locale} = req.body

  try {
    const resToken = await localeHandShake(locale)
    const response = await handleLogin({
      password,
      username,
      token: resToken?.token,
    })

    const mage = String(response?.data?.token)
    res.setHeader('Set-Cookie', `mage=${mage}; Path=/;`)
    return res.json(response?.data?.user)
  } catch (err) {
    return res.status(500).send(`Error registeration ${err}`)
  }
}
