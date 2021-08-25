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

async function getAllUsers(_req, res) {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    res.status(404).json({ message: 'Not Found' })
  }
}


export default {
  show: getOneUser,
  index: getAllUsers,
}