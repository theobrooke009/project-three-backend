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
  year: { type: Number, required: true },
  rated: { type: String, required: false },
  released: { type: String, required: false },
  runtime: { type: Number, required: true },
  genre: { type: String, required: true },
  director: { type: String, required: true },
  writer: { type: String, required: false },
  actors: { type: String, required: true },
  plot: { type: String, maxlength: 500, trim: true },
  language: { type: String, required: false },
  country: { type: String, required: false },
  awards: { type: String, required: false },
  poster: { type: String, required: true },
  metascore: { type: Number, required: false },
  imdbRating: { type: Number, required: true },
  comments: [commentSchema],
})

const Movie = mongoose.model('Movie', movieSchema)

export default Movie
