import {localeHandShake} from '@/services/global'
import {handleLogin, handleRegister} from '@/services/header'

export default async function handler(req, res) {
  const {email, firstName, lastName, password, phone_number, locale} = req.body

  try {
    const resToken = await localeHandShake(locale)
    await handleRegister({
      email,
      firstName,
      lastName,
      password,
      phone_number,
      profile_picture: 'string',
      username: 'sd9oiiiiasd',
      dateOfBirth: '2001-01-01',
      gender: '1',
      token: resToken?.token,
    })
    const resLogin = await handleLogin({
      password,
      username: email,
      token: resToken?.token,
    })
    const mage = String(resLogin?.data?.token)

    res.setHeader('Set-Cookie', `mage=${mage}; Path=/;`)

    return res.json(resLogin?.data?.user)
  } catch (err) {
    return res.status(500).send(`Error registeration ${err}`)
  }
}
