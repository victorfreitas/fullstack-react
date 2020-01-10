import { Router } from 'express'

import auth from 'src/auth'
import validationProfile from 'src/validation/profile'
import getProfiles from 'src/controllers/profile/getProfiles'
import createProfile from 'src/controllers/profile/createProfile'
import me from './me'
import handle from './handle'
import user from './user'
import experience from './experience'
import education from './education'

const router = Router()

/**
 * @route  POST api/profile
 * @desc   Create user profile.
 * @access Private
 */
router.post('/', auth(), ...validationProfile(), createProfile)

/**
 * @route  GET api/profile/all
 * @desc   Get all profiles.
 * @access Public
 */
router.get('/all', getProfiles)

/**
 * @route  /api/profile/me
 * @desc   Current profile.
 * @access private
 */
router.use('/me', me)

/**
 * @route  /api/profile/handle
 * @desc   Profile handle.
 * @access public
 */
router.use('/handle', handle)

/**
 * @route  /api/profile/user
 * @desc   Profile user.
 * @access public
 */
router.use('/user', user)

/**
 * @route  /api/profile/experience
 * @desc   Profile experience.
 * @access private
 */
router.use('/experience', experience)

/**
 * @route  /api/profile/education
 * @desc   Profile education.
 * @access private
 */
router.use('/education', education)

export default router
