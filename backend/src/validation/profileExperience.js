import { body } from 'express-validator'

import validationResult from './validationResult'

export default () => [
  [
    body('title').isEmpty(),
    body('company').isEmpty(),
    body('from').isEmpty(),
  ],
  validationResult,
]
