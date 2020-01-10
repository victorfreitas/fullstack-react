import Validator from 'validator'

import isEmpty from 'src/helpers/isEmpty'
import errorOrNext from './errorOrNext'

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

  return errorOrNext(errors, res, next)
}
