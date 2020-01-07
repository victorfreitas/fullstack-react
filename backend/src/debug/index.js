import debug from 'debug'

export default (namespace, message) => debug(`vikoder:${namespace}`)(message)
