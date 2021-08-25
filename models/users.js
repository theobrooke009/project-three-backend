import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, trim: true, minlength: 3 },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, minlength: 4 },
  // avatar: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
})

userSchema
  .virtual('passwordConfirmation')
  .set(function(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema
  .pre('validate', function(next) {
    if (this.isModified('password') && this.password !== this._passwordConfirmation)
      this.invalidate('passwordConfirmation', 'does not match')
    next()
  })

userSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
  }
  next()
})

userSchema.methods.passwordValidate = function(password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema.plugin(mongooseUniqueValidator)

const User = mongoose.model('User', userSchema)

export default User