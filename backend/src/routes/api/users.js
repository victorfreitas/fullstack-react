import { Router } from 'express'

import auth from 'src/auth'
import registerUser from 'src/controllers/users/register'
import login from 'src/controllers/users/login'
import current from 'src/controllers/users/current'
import validationRegister from 'src/validation/register'
import validationLogin from 'src/validation/login'

const router = Router()

/**
 * @route  POST api/users/register
 * @desc   Register user
 * @access Public
 */
router.post('/register', ...validationRegister(), registerUser)

/**
 * @route  POST api/users/login
 * @desc   Login User / Returning JWT Token
 * @access Public
 */
router.post('/login', ...validationLogin(), login)

/**
 * @route  GET api/users/current
 * @desc   Return current user
 * @access Private
 */
router.get('/current', auth(), current)

export default router
