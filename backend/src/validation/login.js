import Validator from 'validator'

import isEmpty from '../helpers/isEmpty'

export default (req, res, next) => {
  const { email = '', password = '' } = req.body
  const errors = []

  if (isEmpty(email)) {
    errors.push('Email field is required')
  }

  if (!Validator.isEmail(email)) {
    errors.push('Email field is invalid')
  }

  if (isEmpty(password)) {
    errors.push('Password field is required')
  }

  if (!errors.length) {
    return next()
  }

  return res.status(400).json({ errors })
}
