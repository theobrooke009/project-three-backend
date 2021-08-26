import mongoose from 'mongoose'

const marathonSchema = new mongoose.Schema({
  titleone: { type: String, required: true },
  titletwo: { type: String, required: false },
  titlethree: { type: String, required: false },
  titlefour: { type: String, required: false },
  titlefive: { type: String, required: false },
  titlesix: { type: String, required: false },
  titleseven: { type: String, required: false },
  titleeight: { type: String, required: false },
  titlenine: { type: String, required: false },
  titleten: { type: String, required: false },
  name: { type: String, required: true },
  
})

const Marathon = mongoose.model('Marathon', marathonSchema)

export default Marathon