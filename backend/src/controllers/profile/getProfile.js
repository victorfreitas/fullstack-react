import Profile from './Profile'

class GetProfile extends Profile {
  // eslint-disable-next-line class-methods-use-this
  get notFoundMessage() {
    return 'There is no profile for this user'
  }

  getQuery() {
    if (this.user) {
      return { user: this.user.id }
    }

    const [key, value] = Object.entries(this.params).shift()

    return { [key]: value }
  }

  process() {
    return this.Model
      .findOne(this.getQuery())
      .populate('user', ['name', 'avatar'])
  }
}

export default (req, res) => new GetProfile(req, res)
