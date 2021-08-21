import { NotFound } from '../lib/errors.js'
import Movie from '../models/movieEntry.js'

async function getAllMovies(req, res, next) {
  try {
    const allMovies = await Movie.find()
    return res.status(200).json(allMovies)
  } catch (err) {
    next(err)
  }
}

async function getOneMovie(req, res, next) {
  const { movieId } = req.params
  try {
    const movieToFind = await Movie.findById(movieId)
    if (!movieToFind) throw new NotFound()
    return res.status(200).json(movieToFind)
  } catch (err) {
    next(err)
  }

}

export default {
  index: getAllMovies,
  show: getOneMovie,
}