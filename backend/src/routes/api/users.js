import { Router } from 'express'
import passport from 'passport'

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
 * @route  POST api/users/register
 * @desc   Register user
 * @access Public
 */
router.post('/register', registerUser)

/**
 * @route  POST api/users/login
 * @desc   Login User / Returning JWT Token
 * @access Public
 */
router.post('/login', login)

/**
 * @route  GET api/users/current
 * @desc   Return current user
 * @access Private
 */
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { user } = req

  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    avatar: user.avatar,
  })
})

export default router
