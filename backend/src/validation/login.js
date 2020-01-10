import { body } from 'express-validator'

import validationResult from './validationResult'

export default () => [
  [
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
  ],
  validationResult,
]
