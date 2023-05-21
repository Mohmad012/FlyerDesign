import {handleChangePassword} from '@/services/dashbourd/accounts/changePassword'
import {localeHandShake} from '@/services/global'

export default async function handler(req, res) {
  const mage = req.cookies.mage
  const {data, locale} = req.body
  try {
    const {token} = await localeHandShake(locale)
    const response = await handleChangePassword({
      data,
      mage,
      token,
    })

    return res.status(200).json({
      msgRoute: 'Change Password was updated successfully',
      response,
      data,
    })
  } catch (err) {
    return res.status(500).send(`Error Change Password ${err}`)
  }
}
