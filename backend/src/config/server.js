import cors from 'cors'
import helmet from 'helmet'
import { urlencoded, json } from 'express'
import passport from 'passport'

import './passport'

export default (app) => {
  app.use(cors())
  app.use(helmet())
  app.use(urlencoded({ extended: true }))
  app.use(json())
  app.use(passport.initialize())
}
