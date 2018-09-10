import Validator from 'validator'

import isEmpty from '../helpers/isEmpty'

export default (req, res, next) => {
  const errors = []
  const {
    name = '',
    email = '',
    password = '',
    password2 = '',
  } = req.body

  if (isEmpty(name)) {
    errors.push('Name field is required')
  }

  if (!Validator.isLength(name, { min: 2, max: 30 })) {
    errors.push('Name must be between 2 and 30 characters')
  }

  if (isEmpty(email)) {
    errors.push('Email field is required')
  }

  if (!Validator.isEmail(email)) {
    errors.push('Email field is invalid')
  }

  if (isEmpty(password)) {
    errors.push('Password field is required')
  }

  if (!Validator.isLength(password, { min: 6, max: 30 })) {
    errors.push('Password must be at least 6 characters')
  }

  if (isEmpty(password2)) {
    errors.push('Confirm password field is required')
  }

  if (!Validator.equals(password, password2)) {
    errors.push('Passwords must match')
  }

  return errors.length ? res.status(400).json({ errors }) : next()
}
