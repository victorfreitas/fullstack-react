import { Router } from 'express'

import getUsers from '../../controllers/users/getUsers'
import registerUser from '../../controllers/users/register'
import login from '../../controllers/users/login'

const router = Router()

/**
 * @route  GET api/users/test
 * @desc   Tests users route
 * @access Public
 */
router.get('/test', getUsers)

/**
 * @route  GET api/users/register
 * @desc   Register user
 * @access Public
 */
router.post('/register', registerUser)

/**
 * @route  GET api/users/login
 * @desc   Login User / Returning JWT Token
 * @access Public
 */
router.post('/login', login)

export default router
