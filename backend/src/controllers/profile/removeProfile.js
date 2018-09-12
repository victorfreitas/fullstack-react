import Profile from './Profile'
import User from '../../models/User'

class RemoveProfile extends Profile {
  remove() {
    return this.Model.findOneAndRemove({ user: this.user.id })
  }

  onRemovedProfile() {
    User.findOneAndRemove({ _id: this.user.id })
      .then(() => this.res.json({ success: true }))
      .catch(err => this.fail(err.message))
  }

  render() {
    this.remove()
      .then(() => this.onRemovedProfile())
      .catch(err => this.fail(err.message))
  }
}

export default (req, res) => new RemoveProfile(req, res)
