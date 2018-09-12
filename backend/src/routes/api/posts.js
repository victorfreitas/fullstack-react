import { Router } from 'express'

import auth from '../../auth'
import validationPost from '../../validation/post'
import createPost from '../../controllers/posts/createPost'

const router = Router()

/**
 * @route  POST api/posts
 * @desc   Create post
 * @access Private
 */
router.post('/', auth(), validationPost, createPost)

export default router
