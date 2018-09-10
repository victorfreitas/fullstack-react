import { Router } from 'express'

import authenticate from '../../validation/authenticate'
import getProfile from '../../controllers/profile/getProfile'
import getProfiles from '../../controllers/profile/getProfiles'
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
 * @route  GET api/profile/handle/:handle
 * @desc   Get profile by handle
 * @access Public
 */
router.get('/handle/:handle', getProfile)

/**
 * @route  GET api/profile/user/:userId
 * @desc   Get profile by user id
 * @access Public
 */
router.get('/user/:user', getProfile)

/**
 * @route  GET api/profile/all
 * @desc   Get all profiles
 * @access Public
 */
router.get('/all', getProfiles)

/**
 * @route  GET api/profile/test
 * @desc   Tests profile route
 * @access Public
 */
router.get('/test', (req, res) => {
  res.json({ test: true })
})

export default router
