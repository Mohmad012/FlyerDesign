import { getBillAddress, getPayfortSettingsByQuote, payfortSetPaymentMethodByQuote } from '@/services/checkout';
import cookie from 'cookie';

const handleCart = async (req, res) => {
  const { handshake, mage, quote } = req.headers.cookie ? cookie.parse(req.headers.cookie) : {}
  const reqMethod = req.query.m
  const {email } = req.body
  console.log('****** ', { handshake, mage, quote, email})

  if (reqMethod === 'getBillingAddress') {
    const { data, status, error } = await getBillAddress(handshake,quote)
    return res.status(status).json({ data, error, status })
  }

  if (reqMethod === 'setpayfortSetPaymentMethodByQuote') {
    const { data, status, error } = await payfortSetPaymentMethodByQuote(handshake, mage, quote, email)
    return res.status(status).json({ data, error, status })
  }

  if (reqMethod === 'getPayfortSettingsByQuote') {
    const { data, status, error } = await getPayfortSettingsByQuote(handshake, mage, quote)
    return res.status(status).json({ data, error, status })
  }
}

export default handleCart