import { NotFound } from '../lib/errors.js'
import User from '../models/users.js'

async function getOneUser(req,res, next) {
  const { userId } = req.params
  try {
    const userToFind = await User.findById(userId)
    if (!userToFind) throw new NotFound()
    return res.status(200).json(userToFind)
  } catch (err) {
    next(err)
  }
}

export default {
  show: getOneUser,
}