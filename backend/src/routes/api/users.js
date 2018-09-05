import { Router } from 'express'

import getUsers from '../../controllers/users/getUsers'
import registerUser from '../../controllers/users/register'

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

export default router
