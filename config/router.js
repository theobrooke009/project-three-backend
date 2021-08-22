import express from 'express'
import auth from '../controllers/auth.js'
import allMovies from '../controllers/movies.js'
import user from '../controllers/users.js'
// import secureRoute from '../lib/secureRoute.js'

const router = express.Router()

router.route('/api/movies')
  .get(allMovies.index)

.

router.route('/api/movies/:movieId')
  .get(allMovies.show)

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

router.route('/user/:userId')
  .get(user.show)

router.route('/marathon')
  .get(allMovies.index)

export default router
