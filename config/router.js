import express from 'express'
import auth from '../controllers/auth.js'
import allMovies from '../controllers/movies.js'
import user from '../controllers/users.js'
<<<<<<< HEAD
=======
import users from '../controllers/users.js'
>>>>>>> development
// import secureRoute from '../lib/secureRoute.js'

const router = express.Router()


//routes removed here 

router.route('/movies')
  .get(allMovies.index)

router.route('/movies/:movieId')
<<<<<<< HEAD
  // .get(secureRoute, allMovies.show)
=======
>>>>>>> development
  .get(allMovies.show)

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

router.route('/user/:userId')
<<<<<<< HEAD
  // .get(secureRoute, user.show)
  .get(user.show)

router.route('/marathon')
  // .get(secureRoute, allMovies.index)
  .get(allMovies.index)
=======
  .get(user.show)

router.route('/marathon')
  .get(allMovies.index)

router.route('/users')
  .get(users.index)
>>>>>>> development

export default router
