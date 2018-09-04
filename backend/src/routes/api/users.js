import { Router } from 'express'

const router = Router()

/**
 * @route  GET api/users/test
 * @desc   Tests users route
 * @access Public
 */
router.get('/test', (req, res) => {
  res.json({ users: true })
})

export default router
