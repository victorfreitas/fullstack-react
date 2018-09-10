export default (error, req, res, next) => {
  res.status(500).json({ errors: [error.message] })
  next()
}
