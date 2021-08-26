import { NotFound } from '../lib/errors.js'
import User from '../models/users.js'
import Marathon from '../models/marathonEntry.js'

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

//* CREATE MARATHON

async function marathonCreate(req, res, next) {
  const { currentUser } = req 
  try {
    const createdMarathon = await 
    Marathon.create({ ...req.body, addedBy: currentUser })
    return res.status(201).json(createdMarathon)
  } catch (err) {
    next(err)
  }
}


export default {
  show: getOneUser,
  index: getAllUsers,
  create: marathonCreate,
}