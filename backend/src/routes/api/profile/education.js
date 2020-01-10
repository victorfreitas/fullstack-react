import { Router } from 'express'

import auth from 'src/auth'
import validationProfileEducation from 'src/validation/profileEducation'
import addEducation from 'src/controllers/profile/addEducation'
import deleteEducation from 'src/controllers/profile/deleteEducation'

const router = Router()

/**
 * @route  POST api/profile/education
 * @desc   Add education to profile
 * @access Private
 */
router.post('/', auth(), ...validationProfileEducation(), addEducation)

/**
 * @route  DELETE api/profile/education
 * @desc   Delete education from profile
 * @access Private
 */
router.delete('/:id', auth(), deleteEducation)

export default router
