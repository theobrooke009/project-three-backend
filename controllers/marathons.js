import Marathon from '../models/marathonEntry.js'

async function getAllMarathons(req, res, next) {
  try {
    const allMarathons = await Marathon.find()
    return res.status(200).json(allMarathons)
  } catch (err) {
    next(err)
  }
}



export default {
  index: getAllMarathons,
}