import Profile from './Profile'

class GetProfiles extends Profile {
  // eslint-disable-next-line class-methods-use-this
  get notFoundMessage() {
    return 'There are no profiles'
  }

  process() {
    return this.Model
      .find()
      .populate('user', ['name', 'avatar'])
  }
}

export default (req, res) => new GetProfiles(req, res)
