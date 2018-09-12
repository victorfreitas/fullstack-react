import { Router } from 'express'

import auth from '../../auth'
import validationProfile from '../../validation/profile'
import validationProfileExperience from '../../validation/profileExperience'
import validationProfileEducation from '../../validation/profileEducation'
import getProfile from '../../controllers/profile/getProfile'
import getProfiles from '../../controllers/profile/getProfiles'
import createProfile from '../../controllers/profile/createProfile'
import addExperience from '../../controllers/profile/addExperience'
import deleteExperience from '../../controllers/profile/deleteExperience'
import addEducation from '../../controllers/profile/addEducation'
import deleteEducation from '../../controllers/profile/deleteEducation'
import removeProfile from '../../controllers/profile/removeProfile'

const router = Router()

/**
 * @route  GET api/profile
 * @desc   Get current user profile
 * @access Private
 */
router.get('/', auth(), getProfile)

/**
 * @route  POST api/profile
 * @desc   Create user profile
 * @access Private
 */
router.post('/', auth(), validationProfile, createProfile)

/**
 * @route  DELETE api/profile
 * @desc   Delete user and profile
 * @access Private
 */
router.delete('/', auth(), removeProfile)

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
router.post('/experience', auth(), validationProfileExperience, addExperience)

/**
 * @route  DELETE api/profile/experience
 * @desc   Delete experience from profile
 * @access Private
 */
router.delete('/experience/:id', auth(), deleteExperience)

/**
 * @route  POST api/profile/education
 * @desc   Add education to profile
 * @access Private
 */
router.post('/education', auth(), validationProfileEducation, addEducation)

/**
 * @route  DELETE api/profile/education
 * @desc   Delete education from profile
 * @access Private
 */
router.delete('/education/:id', auth(), deleteEducation)

export default router
