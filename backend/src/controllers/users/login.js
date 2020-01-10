import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import Users from './Users'

class Login extends Users {
  success(user) {
    if (!user) {
      this.loginFailed()
      return
    }

    bcrypt
      .compare(this.body.password, user.password)
      .then(isMatch => this.passwordCheck(isMatch, user))
  }

  loginFailed() {
    this.fail('User not found', 400)
  }

  passwordCheck(isMatch, user) {
    if (!isMatch) {
      this.loginFailed()
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
      .then(this.success)
      .catch(err => this.fail(err.message))
  }
}

export default (req, res) => new Login(req, res)
