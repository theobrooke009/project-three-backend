// import jwt from 'jsonwebtoken'
// import { secret } from '../config/environment.js'
// import User from '../models/users.js'
// import { Unauthorized } from './errors.js'

// export default async function secureRoute(req, res, next) {
//   try {
//     if (!req.headers.authorization) {
//       throw new Unauthorized
//     }
//     const token = req.headers.authorization.replace('Bearer', '')

//     const payload = jwt.verify(token, secret)

//     const user = await User.findById(payload.sub)

//     if (!user) {
//       throw new Unauthorized
//     }
//     next
//   } catch (err) {
//     next(err)
//   }
// }