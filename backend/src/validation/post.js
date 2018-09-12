import Validator from 'validator'

import isEmpty from '../helpers/isEmpty'
import errorOrNext from './errorOrNext'

export default (req, res, next) => {
  const errors = []
  const { text = '' } = req.body

  if (isEmpty(text)) {
    errors.push('Text field is required')
  }

  if (!Validator.isLength(text, { min: 10, max: 300 })) {
    errors.push('Post must be between 10 and 300 characters')
  }

  return errorOrNext(errors, res, next)
}
