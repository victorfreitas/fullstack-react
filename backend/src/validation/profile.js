import Validator from 'validator'

import isEmpty from '../helpers/isEmpty'
import errorOrNext from './errorOrNext'

export default (req, res, next) => {
  const { body } = req
  const { handle = '', status = '', skills = '' } = body
  const errors = []

  if (isEmpty(handle)) {
    errors.push('Handle field is required')
  }

  if (!Validator.isLength(handle, { min: 2, max: 40 })) {
    errors.push('Handle needs to between 2 and 40 characters')
  }

  if (isEmpty(status)) {
    errors.push('Status field is required')
  }

  if (isEmpty(skills)) {
    errors.push('Skills field is required')
  }

  if (!isEmpty(body.website) && !Validator.isURL(body.website)) {
    errors.push('Website field is invalid')
  }

  return errorOrNext(errors, res, next)
}
