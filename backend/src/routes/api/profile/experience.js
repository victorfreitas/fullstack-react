import { Router } from 'express'

import auth from 'src/auth'
import validationProfileExperience from 'src/validation/profileExperience'
import addExperience from 'src/controllers/profile/addExperience'
import deleteExperience from 'src/controllers/profile/deleteExperience'

const router = Router()

/**
 * @route  POST api/profile/experience
 * @desc   Add experience to profile
 * @access Private
 */
router.post('/', auth(), validationProfileExperience, addExperience)

/**
 * @route  DELETE api/profile/experience
 * @desc   Delete experience from profile
 * @access Private
 */
router.delete('/:id', auth(), deleteExperience)

export default router
