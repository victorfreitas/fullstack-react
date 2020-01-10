import { Router } from 'express'

import api from './api'

const router = Router()

/**
 * @route  GET /
 * @desc   Home page.
 * @access Public
 */
router.get('/', (req, res) => {
  res.send('HOME')
})

router.use('/api', api)

export default router
