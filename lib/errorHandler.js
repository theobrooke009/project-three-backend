export default function errorHandler(err, _req, res, next) {
  console.log(`there was an error - Error ${err.name}`)
  if (err.name === 'Not Found' || err.name === 'CastError'){
    return res.status(404).json({ message: 'Not Found' })
  }

  if (err.name === 'ValidationError') {
    const customErrors = {}

    for (const key in err.errors){
      customErrors[key] = err.errors[key].message
    }
    return res.status(422).json(customErrors)
  }

  if (err.name === 'Unauthorized' || 
      err.name === 'JsonWebTokenError' ||
      err.name === 'TokenExpired'
  ) {
    res.status(401).json( { message: 'Unauthorized' } )
  }
  res.sendStatus(500)
  next(err)

}