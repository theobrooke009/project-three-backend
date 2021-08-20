import { Unauthorized } from '../lib/errors.js'
import User from '../models/users.js'
import jwt from 'jsonwebtoken'
import { secret } from '../config/environment.js'

async function registerUser(req, res, next) {
  try {
    const createdUser = await User.create(req.body)
    return res.status(201).json({ message: `Welcome ${createdUser.username}` })
  } catch (err) {
    next(err)
  }
}

async function loginUser(req, res, next) {
  try {
    const userLogin = await User.findOne({ email: req.body.email })
    if (!userLogin || userLogin.passwordValidate(req.body.password)) {
      throw new Unauthorized()
    }
    const token = jwt.sign({ sub: userLogin._id }, secret, { expiresIn: '2 days' })
    
    return res.status(202).json({
      message: `welcome back ${userLogin.username}`,
    })
  } catch (err) {
    next(err)
  }
}

export default {
  login: loginUser,
  register: registerUser,
}