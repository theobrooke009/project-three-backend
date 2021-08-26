import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  comment: { type: String, required: true, maxlength: 500 },
  rating: { type: Number, required: true, min: 0, max: 10 },
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
})

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true, trim: true },
  year: { type: String, required: true },
  rated: { type: String, required: true },
  released: { type: String, required: true },
  actors: { type: String, required: true },
  runtime: { type: Number, required: true },
  genre: { type: String, required: true },
  director: { type: String, required: true },
  writer: { type: String, required: true },
  plot: { type: String, maxlength: 500, trim: true },
  poster: { type: String, required: true },
  language: { type: String, required: false },
  country: { type: String, required: false },
  awards: { type: String, required: false },
  metascore: { type: Number, required: false },
  imdbrating: { type: Number, required: false },
  comments: [commentSchema],
})

const Movie = mongoose.model('Movie', movieSchema)

export default Movie

