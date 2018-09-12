export default (errors, res, next) => (
  errors.length ? res.status(400).json({ errors }) : next()
)
