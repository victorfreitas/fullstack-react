import Profile from './Profile'

class GetProfile extends Profile {
  getQuery() {
    const { user, params } = this.req

    if (user) {
      return { user: user.id }
    }

    const [key, value] = Object.entries(params).shift()

    return { [key]: value }
  }

  findOne() {
    return this.Model
      .findOne(this.getQuery())
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

export default (req, res) => new GetProfile(req, res)
