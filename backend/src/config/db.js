import mongoose from 'mongoose'

import debug from '../debug'

const onConnect = () => {
  debug('mongodb', 'Mongodb success connected')
}

const onError = (err) => {
  debug('mongodb', err.message)
}

mongoose.set('useCreateIndex', true)
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose
  .connect(process.env.MONGO_URI)
  .then((onConnect))
  .catch(onError)
