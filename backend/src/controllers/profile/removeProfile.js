import Profile from './Profile'
import User from '../../models/User'

class RemoveProfile extends Profile {
  remove() {
    return this.Model.findOneAndDelete({ user: this.user.id })
  }

  sucess() {
    User.findOneAndDelete({ _id: this.user.id })
      .then(() => this.res.json({ success: true }))
      .catch(err => this.fail(err.message))
  }

  render() {
    this.remove()
      .then(() => this.sucess())
      .catch(err => this.fail(err.message))
  }
}

export default (req, res) => new RemoveProfile(req, res)
