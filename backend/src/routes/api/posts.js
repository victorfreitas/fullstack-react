import { Router } from 'express'

import auth from '../../auth'
import validationPost from '../../validation/post'
import createPost from '../../controllers/posts/createPost'
import getPosts from '../../controllers/posts/getPosts'
import getPostById from '../../controllers/posts/getPostById'
import removePost from '../../controllers/posts/removePost'
import likePost from '../../controllers/posts/likePost'
import unlikePost from '../../controllers/posts/unlikePost'
import addComment from '../../controllers/posts/addComment'
import deleteComment from '../../controllers/posts/deleteComment'

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
router.delete('/:id/like', auth(), unlikePost)

/**
 * @route  POST api/posts/:id/comment
 * @desc   Add comment to post
 * @access Private
 */
router.post('/:id/comment', auth(), validationPost, addComment)

/**
 * @route  DELETE api/posts/:id/comment
 * @desc   Add comment to post
 * @access Private
 */
router.delete('/:id/comment/:commentId', auth(), deleteComment)

export default router
