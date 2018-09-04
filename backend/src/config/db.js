import mongoose from 'mongoose'

import debug from '../debug'

const onConnect = () => {
  debug('mongodb', 'Mongodb success connected')
}

const onError = (err) => {
  debug('mongodb', err.message)
}

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then((onConnect))
  .catch(onError)
