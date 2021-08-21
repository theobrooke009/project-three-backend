import movieData from './data/movieData.js'
import Movie from '../models/movieEntry.js'
import { connectDB, disconnectDB, truncateDB } from './helpers.js'


async function seed() {
  try {
    await connectDB()
    console.log('Database connected')

    await truncateDB()
    console.log('Database Dropped')

    const movie = await Movie.create(movieData)

    console.log(`${movie.length} have been added to the database`)
    
  } catch (err) {
    console.log(err)
  }

  await disconnectDB()
  console.log('database disconnected')
}

seed()