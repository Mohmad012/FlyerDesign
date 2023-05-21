export default async function handler(req, res) {
    if (req.query.secret !== '123') {
        return res.status(401).json({message: 'Invalid token'})
    }
    try {
        await Promise.all([
            res.revalidate(`/category/*/*`),
            res.revalidate(`/en-SA/category/*/*`),
            res.revalidate(`/en-SA-dmm/category/*/*`),
            res.revalidate(`/en-SA-jed/category/*/*`),
            res.revalidate(`/en-SA-ruh/category/*/*`),
            res.revalidate(`/ar-SA-dmm/category/*/*`),
            res.revalidate(`/ar-SA-jed/category/*/*`),
            res.revalidate(`/ar-SA-ruh/category/*/*`)
        ]);
        return res.json({revalidated: true, product: req.query.sku})
    } catch (err) {
        return res.status(500).send('Error revalidating')
    }
}
