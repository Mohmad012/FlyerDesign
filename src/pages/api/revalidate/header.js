export default async function handler(req, res) {
  try {
    // Send a response when processing is complete
    res.status(200).json({message: 'Processing complete!'})
  } catch (error) {
    res.status(500).json({message: 'An error occurred'})
  }
}
