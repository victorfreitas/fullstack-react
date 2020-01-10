import { body } from 'express-validator'

import validationResult from './validationResult'

export default () => [
  [
    body('name').isLength({ min: 2, max: 30 }),
    body('email').isEmail(),
    body('password').isLength({ min: 6 }).equals('password2'),
  ],
  validationResult,
]
