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
  decade: { type: String },
  runtime: { type: Number, required: true },
  genre: { type: String, required: true },
  director: { type: String, required: true },
  plot: { type: String, maxlength: 500, trim: true },
  poster: { type: String, required: true },
  rating: { type: Number, required: false },
  tagline: { type: String, maxlength: 200 },
  comments: [commentSchema],
})

const Movie = mongoose.model('Movie', movieSchema)

export default Movie