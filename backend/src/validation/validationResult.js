import { validationResult } from 'express-validator'

export default (req, res, next) => {
  const errors = validationResult(req)

  return errors.isEmpty()
    ? next()
    : res.status(422).json({ errors: errors.array() })
}
