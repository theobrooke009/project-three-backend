import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, trim: true, minlength: 3 },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, minlength: 4 },
  avatar: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
})

const User = mongoose.model('User', userSchema)

export default User