export default async function handler(req, res) {
  if (req.query.secret !== '123') {
    return res.status(401).json({message: 'Invalid token'})
  }
  try {
    await Promise.all([
       res.revalidate('/'),
       res.revalidate('/en-SA'),
       res.revalidate('/en-SA-dmm'),
       res.revalidate('/en-SA-jed'),
       res.revalidate('/en-SA-ruh'),
       res.revalidate('/ar-SA-dmm'),
       res.revalidate('/ar-SA-jed'),
       res.revalidate('/ar-SA-ruh')
    ]);

    return res.json({revalidated: true})
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
