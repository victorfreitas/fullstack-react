import Profile from './Profile'

class GetProfiles extends Profile {
  success(profiles) {
    if (!profiles) {
      this.fail('There are no profiles', 404)
      return
    }

    this.res.json(profiles)
  }

  render() {
    this.Model
      .find()
      .populate('user', ['name', 'avatar'])
      .then(profiles => this.success(profiles))
      .catch(err => this.fail(err.message))
  }
}

export default (req, res) => new GetProfiles(req, res)
