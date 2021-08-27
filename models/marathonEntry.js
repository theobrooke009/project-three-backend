import mongoose from 'mongoose'

const marathonSchema = new mongoose.Schema({
  0: { type: String, required: false },
  1: { type: String, required: false },
  2: { type: String, required: false },
  3: { type: String, required: false },
  4: { type: String, required: false },
  5: { type: String, required: false },
  6: { type: String, required: false },
  7: { type: String, required: false },
  8: { type: String, required: false },
  9: { type: String, required: false },
  name: { type: String, required: true },
  
})

const Marathon = mongoose.model('Marathon', marathonSchema)

export default Marathon