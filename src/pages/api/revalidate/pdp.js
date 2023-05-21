export default async function handler(req, res) {
    if (req.query.secret !== '123') {
        return res.status(401).json({message: 'Invalid token'})
    }
    try {
        await Promise.all([
            res.revalidate(`/${req.query.sku}`),
            res.revalidate(`/en-SA/${req.query.sku}`),
            res.revalidate(`/en-SA-dmm/${req.query.sku}`),
            res.revalidate(`/en-SA-jed/${req.query.sku}`),
            res.revalidate(`/en-SA-ruh/${req.query.sku}`),
            res.revalidate(`/ar-SA-dmm/${req.query.sku}`),
            res.revalidate(`/ar-SA-jed/${req.query.sku}`),
            res.revalidate(`/ar-SA-ruh/${req.query.sku}`)
        ]);

        return res.json({revalidated: true, product: req.query.sku})
    } catch (err) {
        return res.status(500).send('Error revalidating')
    }
}
