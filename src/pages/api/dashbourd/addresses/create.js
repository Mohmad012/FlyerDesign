import {
  handleCreateNewAddress,
  handleDelete,
} from '@/services/dashbourd/addresses'

export default async function handler(req, res) {
  const {data, mage, token} = req.body
  console.log({body: req.body})
  try {
    const response = await handleCreateNewAddress({
      data,
      mage,
      token,
    })

    return res.status(200).json({
      msgRoute: 'address was created successfully',
      response,
      data,
    })
  } catch (err) {
    return res.status(500).send(`Error delete address ${err}`)
  }
}
