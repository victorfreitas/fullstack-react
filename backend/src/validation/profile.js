import { body } from 'express-validator'

import validationResult from './validationResult'

export default () => [
  [
    body('handle').isLength({ min: 2, max: 40 }),
    body('status').isEmpty(),
    body('skills').isEmpty(),
    body('website').isURL().optional(),
  ],
  validationResult,
]
