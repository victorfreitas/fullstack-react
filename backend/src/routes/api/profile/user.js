import { Router } from 'express'

import getProfile from 'src/controllers/profile/getProfile'

const router = Router()

/**
 * @route  GET api/profile/user/:user
 * @desc   Get profile by user id
 * @access Public
 */
router.get('/:user', getProfile)

export default router
