import { Router } from 'express'

import auth from 'src/auth'
import validationPost from 'src/validation/post'
import createPost from 'src/controllers/posts/createPost'
import getPosts from 'src/controllers/posts/getPosts'
import getPostById from 'src/controllers/posts/getPostById'
import removePost from 'src/controllers/posts/removePost'
import likePost from 'src/controllers/posts/likePost'
import unlikePost from 'src/controllers/posts/unlikePost'
import addComment from 'src/controllers/posts/addComment'
import deleteComment from 'src/controllers/posts/deleteComment'

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
