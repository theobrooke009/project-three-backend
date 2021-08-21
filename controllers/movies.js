import Movie from '../models/movieEntry.js'

async function getAllMovies(req, res, next) {
  try {
    const allMovies = await Movie.find()
    return res.status(200).json(allMovies)
  } catch (err) {
    next(err)
  }
}

export default {
  index: getAllMovies,
}