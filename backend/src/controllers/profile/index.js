import Profile from './Profile'

class Home extends Profile {
  findOne() {
    const { user } = this.req
    return this.Model
      .findOne({ user: user.id })
      .populate('user', ['name', 'avatar'])
  }

  success(profile) {
    if (!profile) {
      this.fail('There is no profile for this user', 404)
      return
    }

    this.res.json(profile)
  }

  render() {
    this.findOne()
      .then(profile => this.success(profile))
      .catch(err => this.fail(err.message))
  }
}

export default (req, res) => new Home(req, res)
