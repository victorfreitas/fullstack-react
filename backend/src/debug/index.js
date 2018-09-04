import debug from 'debug'

export default (namespace, message) => debug(`letzup:${namespace}`)(message)
