import express from 'express'
import auth from '../controllers/auth.js'
import allMovies from '../controllers/movies.js'
import user from '../controllers/users.js'
// import secureRoute from '../lib/secureRoute.js'

const router = express.Router()


//routes removed here 

router.route('/movies')
  .get(allMovies.index)

router.route('/movies/:movieId')
  // .get(secureRoute, allMovies.show)
  .get(allMovies.show)

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

router.route('/user/:userId')
  // .get(secureRoute, user.show)
  .get(user.show)

router.route('/marathon')
  // .get(secureRoute, allMovies.index)
  .get(allMovies.index)

export default router
