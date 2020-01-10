import { Router } from 'express'

import auth from 'src/auth'
import getProfile from 'src/controllers/profile/getProfile'
import removeProfile from 'src/controllers/profile/removeProfile'

const router = Router()

/**
 * @route  GET api/profile/me
 * @desc   Get current user profile
 * @access Private
 */
router.get('/', auth(), getProfile)

/**
 * @route  DELETE api/profile/me
 * @desc   Delete user and profile
 * @access Private
 */
router.delete('/', auth(), removeProfile)

export default router
