import { body } from 'express-validator'

import validationResult from './validationResult'

export default () => [
  [
    body('school').isEmpty(),
    body('degree').isEmpty(),
    body('fieldofstudy').isEmpty(),
    body('from').isEmpty(),
  ],
  validationResult,
]
