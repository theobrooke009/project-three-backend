import express from 'express'
import auth from '../controllers/auth.js'
import allMovies from '../controllers/movies.js'

const router = express.Router()

router.route('/movies')
  .get(allMovies.index)

router.route('/movies/:movieId')
  .get(allMovies.show)

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

  
export default router
