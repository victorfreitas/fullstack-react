import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import Users from './Users'

class Login extends Users {
  success(user) {
    if (!user) {
      this.fail({ message: 'User not found' }, 400)
      return
    }

    bcrypt
      .compare(this.body.password, user.password)
      .then(isMatch => this.passwordCheck(isMatch, user))
  }

  passwordCheck(isMatch, user) {
    if (!isMatch) {
      this.fail({ message: 'User not Found' }, 400)
      return
    }

    const payload = {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
    }

    jwt.sign(
      payload,
      process.env.SECRET_KEY,
      { expiresIn: 3600 },
      (_, token) => this.jwtToken(token)
    )
  }

  jwtToken(token) {
    this.res.json({
      success: true,
      token: `Bearer ${token}`,
    })
  }

  render() {
    this.Model
      .findOne({ email: this.body.email })
      .then(user => this.success(user))
      .catch(err => this.fail(err))
  }
}

export default (req, res) => new Login(req, res)
