import { Router } from 'express'

import authenticate from '../../validation/authenticate'
import getProfile from '../../controllers/profile'
import createProfile from '../../controllers/profile/createProfile'
import validationProfile from '../../validation/profile'

const router = Router()

/**
 * @route  GET api/profile
 * @desc   Get current user profile
 * @access Private
 */
router.get('/', authenticate(), getProfile)

/**
 * @route  POST api/profile
 * @desc   Create user profile
 * @access Private
 */
router.post('/', validationProfile, authenticate(), createProfile)

/**
 * @route  GET api/profile/test
 * @desc   Tests profile route
 * @access Public
 */
router.get('/test', (req, res) => {
  res.json({ test: true })
})

export default router
