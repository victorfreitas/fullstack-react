import { urlencoded, json } from 'express'
import helmet from 'helmet'
import cors from 'cors'

export default (app) => {
  app.use(helmet())
  app.use(cors())
  app.use(urlencoded({ extended: true }))
  app.use(json())
}
