import express from 'express'
import cors from 'cors'
import { connectDB } from './db/helpers.js'
import logger from './lib/logger.js'
import errorHandler from './lib/errorHandler.js'
import { port } from './config/environment.js'
import router from './config/router.js'

const app = express()
app.use(express.json())

app.use('/', logger)
app.use('/api', router)
app.use(errorHandler)
app.use(cors())


async function startServer() {
  try {
    await connectDB()
    console.log('Mongoose DB is conncted')
    app.listen(port, () => console.log(`Listening on Port: ${port}`))
  } catch (err) {
    console.log('something went wrong')
    console.log(err)
  }
}
startServer()
