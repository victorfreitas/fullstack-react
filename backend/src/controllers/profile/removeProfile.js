import User from 'src/models/User'
import Profile from './Profile'

class RemoveProfile extends Profile {
  remove() {
    return this.Model.findOneAndDelete({ user: this.user.id })
  }

  removeUser() {
    User.findOneAndDelete({ _id: this.user.id })
      .then(this.success.bind(this))
      .catch(err => this.fail(err.message))
  }

  success() {
    this.res.json({ success: true })
  }

  render() {
    this.remove()
      .then(() => this.removeUser())
      .catch(err => this.fail(err.message))
  }
}

export default (req, res) => new RemoveProfile(req, res)
