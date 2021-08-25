import movieData from './data/movieData.js'
import Movie from '../models/movieEntry.js'
import { connectDB, disconnectDB, truncateDB } from './helpers.js'
import faker from 'faker'
import User from '../models/users.js'

async function seed() {
  try {
    await connectDB()
    console.log('Database connected')

    await truncateDB()
    console.log('Database Dropped')

    const users = [] // ! an array to push my 100 fake users into

    for (let index = 0; index < 100; index++) { // ! looping to created 300 users
      const username = faker.internet.userName() // ! generating a fake username
      const email = `${username}@email.com` // ! Using username to make the email
      const avatar = faker.image.avatar() // ! and a fake profile image
      users.push({
        username,
        email,
        avatar,
        password: 'pass', // ! setting all the passwords the same
        passwordConfirmation: 'pass',
      })
    }

    const createdUsers = await User.create(users) // ! then pass that users array

    console.log(`🤖 Created ${createdUsers.length} Users`)
    
    const movie = await Movie.create(movieData)

    console.log(`${movie.length} have been added to the database`)
    
    
  } catch (err) {
    console.log(err)
  }

  await disconnectDB()
  console.log('database disconnected')
}

seed()