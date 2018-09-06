import Users from './Users'
import { gravatarUrl } from '../../helpers/gravatar'
import generateHash from '../../helpers/generateHash'

class Register extends Users {
  success(user) {
    if (user) {
      this.fail('Email already exists', 400)
      return
    }

    this.setNewUser()
    this.save()
  }

  setNewUser() {
    this.newUser = new this.Model({
      name: this.body.name,
      email: this.body.email,
      password: this.body.password,
      avatar: gravatarUrl(this.body.email),
    })
  }

  save() {
    generateHash(this.newUser.password)
      .then(this.saveUser.bind(this))
      .catch(err => this.fail(err.message))
  }

  saveUser(hash) {
    this.newUser.password = hash
    this.newUser
      .save()
      .then(user => this.res.json(user))
      .catch(err => this.fail(err.message))
  }

  render() {
    this.Model
      .findOne({ email: this.body.email })
      .then(this.success.bind(this))
      .catch(err => this.fail(err.message))
  }
}

export default (req, res) => new Register(req, res)
