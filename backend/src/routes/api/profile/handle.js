import { Router } from 'express'

import getProfile from 'src/controllers/profile/getProfile'

const router = Router()

/**
 * @route  GET api/profile/handle/:handle
 * @desc   Get profile by handle
 * @access Public
 */
router.get('/:handle', getProfile)

export default router
