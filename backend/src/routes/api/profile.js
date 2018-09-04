import { Router } from 'express'

const router = Router()

/**
 * @route  GET api/profile/test
 * @desc   Tests profile route
 * @access Public
 */
router.get('/test', (req, res) => {
  res.json({ profile: true })
})

export default router
