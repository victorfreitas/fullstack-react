import { Router } from 'express'

import users from './users'
import profile from './profile'
import posts from './posts'

const router = Router()

router.use('/users', users)
router.use('/profile', profile)
router.use('/posts', posts)

export default router
