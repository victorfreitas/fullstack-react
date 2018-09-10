import { Router } from 'express'

import getUsers from '../../controllers/users/getUsers'
import registerUser from '../../controllers/users/register'
import login from '../../controllers/users/login'
import current from '../../controllers/users/current'

import validationRegister from '../../validation/register'
import validationLogin from '../../validation/login'
import authenticate from '../../validation/authenticate'

const router = Router()

/**
 * @route  GET api/users/test
 * @desc   Tests users route
 * @access Public
 */
router.get('/test', getUsers)

/**
 * @route  POST api/users/register
 * @desc   Register user
 * @access Public
 */
router.post('/register', validationRegister, registerUser)

/**
 * @route  POST api/users/login
 * @desc   Login User / Returning JWT Token
 * @access Public
 */
router.post('/login', validationLogin, login)

/**
 * @route  GET api/users/current
 * @desc   Return current user
 * @access Private
 */
router.get('/current', authenticate(), current)

export default router
