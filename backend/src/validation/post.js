import { body } from 'express-validator'

import validationResult from './validationResult'

export default () => [
  [body('text').isLength({ min: 10, max: 300 })],
  validationResult,
]
