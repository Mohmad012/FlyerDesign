import https from "https";
import axios from "axios";
import fs from 'fs'
import path from 'path'



async function handleValidation(req, res) {
    if (req.method !== 'POST') {
        res.status(405).end();
        return;
    }
    try {
        const appleUrl  = "https://apple-pay-gateway-pr-pod5.apple.com/paymentservices/startSession";
        const payload = {
            merchantIdentifier: process.env.MERCHANT_ID,
            domainName: process.env.DOMAIN,
            displayName: 'Voucherek',
        };
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
            cert: fs.readFileSync(path.join(process.cwd(), process.env.CERTIFICATE_PEM)),
            key: fs.readFileSync(path.join(process.cwd(), process.env.CERTIFICATE_KEY)),
        });
        const response = await axios.post(
            appleUrl,
            payload,
            {
                httpsAgent,
            },
        );

        res.send(response.data);
    } catch (err) {
        console.log(err.stack);
        throw new Error(err.stack);
    }
}
export default handleValidation;
