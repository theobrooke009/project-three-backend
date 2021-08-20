import User from '../models/users.js'
import { Unauthorized } from '../lib/errors.js'
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

async function userLogin(req, res, next) {
  try {
    const userToLogin = await User.findOne({ email: req.body.email })
    if (!userToLogin || !userToLogin.passwordValidate(req.body.password)) {
      throw new Unauthorized()
    }

    const token = jwt.sign({ sub: userToLogin._id }, secret, { expiresIn: '2 days' })
    return res.status(202).json({
      message: `welcome back ${userToLogin.username}`,
      token: token,

    })
  } catch (err) {
    next(err)
  }
}



export default {
  register: registerUser,
  login: userLogin,
}