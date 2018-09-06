import passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'

import User from '../models/User'
import debug from '../debug'

const opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.SECRET_KEY

passport.use(new Strategy(opts, (payload, done) => {
  User.findById(payload.id)
    .then(user => done(null, user || false))
    .catch(err => debug('passport', err.message))
}))
