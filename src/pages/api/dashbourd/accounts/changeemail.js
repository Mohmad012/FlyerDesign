import {handleChangeEmail} from '@/services/dashbourd/accounts/changeEmail'
import {localeHandShake} from '@/services/global'

export default async function handler(req, res) {
  const {data, locale} = req.body
  const mage = req.cookies.mage
  try {
    const {token} = await localeHandShake(locale)
    const response = await handleChangeEmail({
      data,
      mage,
      token,
    })

    return res.status(200).json({
      msgRoute: 'Change Email was updated successfully',
      response,
      data,
    })
  } catch (err) {
    return res.status(500).send(`Error Change Email ${err}`)
  }
}
