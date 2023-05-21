import {handleDelete} from '@/services/dashbourd/addresses'

export default async function handler(req, res) {
  const {id, mage, token} = req.body

  try {
    const response = await handleDelete({
      id,
      mage,
      token,
    })

    return res
      .status(200)
      .json({msgRoute: 'address was deleted successfully', response})
  } catch (err) {
    return res.status(500).send(`Error delete address ${err}`)
  }
}
