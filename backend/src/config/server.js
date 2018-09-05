import cors from 'cors'
import helmet from 'helmet'
import { urlencoded, json } from 'express'

export default (app) => {
  app.use(cors())
  app.use(helmet())
  app.use(urlencoded({ extended: true }))
  app.use(json())
}
