import './config/dotenv'
import './config/db'

import express from 'express'

import debug from './debug'
import configServer from './config/server'
import routes from './routes'

const { PORT } = process.env
const app = express()

configServer(app)

app.use('/', routes)

app.listen(PORT, () => {
  debug('server', `Server running on http://localhost:${PORT}`)
})
