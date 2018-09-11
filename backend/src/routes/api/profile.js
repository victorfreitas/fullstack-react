import { Router } from 'express'

import authenticate from '../../validation/authenticate'
import validationProfile from '../../validation/profile'
import validationProfileExperience from '../../validation/profileExperience'
import validationProfileEducation from '../../validation/profileEducation'
import getProfile from '../../controllers/profile/getProfile'
import getProfiles from '../../controllers/profile/getProfiles'
import createProfile from '../../controllers/profile/createProfile'
import addExperience from '../../controllers/profile/addExperience'
import addEducation from '../../controllers/profile/addEducation'

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
router.post('/', authenticate(), validationProfile, createProfile)

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
 * @route  POST api/profile/experience
 * @desc   Add experience to profile
 * @access Private
 */
router.post('/experience', authenticate(), validationProfileExperience, addExperience)

/**
 * @route  POST api/profile/education
 * @desc   Add education to profile
 * @access Private
 */
router.post('/education', authenticate(), validationProfileEducation, addEducation)

export default router
