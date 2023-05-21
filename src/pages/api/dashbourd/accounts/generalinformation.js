import {handleGeneralInformation} from '@/services/dashbourd/accounts/GeneralInformation'
import {localeHandShake} from '@/services/global'

export default async function handler(req, res) {
  const mage = req.cookies.mage
  const {data, locale} = req.body
  try {
    const {token} = await localeHandShake(locale)
    const response = await handleGeneralInformation({
      data,
      mage,
      token,
    })

    return res.status(200).json({
      msgRoute: 'Change FirstName, LastName was updated successfully',
      response,
      data,
    })
  } catch (err) {
    return res.status(500).send(`Error Change FirstName, LastName ${err}`)
  }
}
