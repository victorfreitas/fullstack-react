import bcrypt from 'bcryptjs'

export default (value, rounds = 10) => new Promise((resolve, reject) => {
  bcrypt.genSalt(rounds, (e, salt) => {
    bcrypt.hash(value, salt, (err, hash) => {
      if (err) {
        reject(err)
        return
      }

      resolve(hash)
    })
  })
})
