import { Router } from 'express'

import auth from '../../auth'
import validationPost from '../../validation/post'
import createPost from '../../controllers/posts/createPost'
import getPosts from '../../controllers/posts/getPosts'
import getPostById from '../../controllers/posts/getPostById'
import removePost from '../../controllers/posts/removePost'
import likePost from '../../controllers/posts/likePost'
import unlikePost from '../../controllers/posts/unlikePost'

const router = Router()

/**
 * @route  GET api/posts
 * @desc   Get posts
 * @access Public
 */
router.get('/', getPosts)

/**
 * @route  POST api/posts
 * @desc   Create post
 * @access Private
 */
router.post('/', auth(), validationPost, createPost)

/**
 * @route  GET api/posts/:id
 * @desc   Get post by id
 * @access Public
 */
router.get('/:id', getPostById)

/**
 * @route  GET api/posts/:id
 * @desc   Get post by id
 * @access Public
 */
router.delete('/:id', auth(), removePost)

/**
 * @route  POST api/posts/:id/like
 * @desc   Like post
 * @access Private
 */
router.post('/:id/like', auth(), likePost)

/**
 * @route  POST api/posts/:id/unlike
 * @desc   Unlike post
 * @access Private
 */
router.post('/:id/unlike', auth(), unlikePost)

export default router
