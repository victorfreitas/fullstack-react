import Profile from './Profile'
import mergeFields from './defaultFields'
import isEmpty from '../../helpers/isEmpty'

class CreateProfile extends Profile {
  getFields() {
    const { skills } = this.body

    if (!isEmpty(skills)) {
      this.body.skills = skills.split(',')
    }

    return mergeFields({
      user: this.user.id,
      ...this.body,
    })
  }

  createOrUpdate() {
    return this.Model.findOneAndUpdate(
      { user: this.user.id },
      { $set: this.getFields() },
      { new: true, upsert: true }
    )
  }

  success(profile) {
    this.res.json(profile)
  }

  render() {
    this.createOrUpdate()
      .then(profile => this.success(profile))
      .catch(err => this.fail(err.message))
  }
}

export default (req, res) => new CreateProfile(req, res)
