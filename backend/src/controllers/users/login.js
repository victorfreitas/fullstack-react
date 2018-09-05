import bcrypt from 'bcryptjs'

import Users from './Users'

class Login extends Users {
  success(user) {
    if (!user) {
      this.fail({ message: 'User not found' }, 400)
      return
    }

    bcrypt
      .compare(this.body.password, user.password)
      .then(isMatch => this.passwordCheck(isMatch))
  }

  passwordCheck(isMatch) {
    if (isMatch) {
      this.res.json({ success: true })
      return
    }

    this.fail({ message: 'User not Found' }, 400)
  }

  render() {
    this.Model
      .findOne({ email: this.body.email })
      .then(user => this.success(user))
      .catch(err => this.fail(err))
  }
}

export default (req, res) => new Login(req, res)
