import Profile from './Profile'
import mergeFields from './mergeFields'
import isEmpty from '../../helpers/isEmpty'

class CreateProfile extends Profile {
  getFields() {
    const { user, body } = this.req

    if (!isEmpty(body.skills)) {
      body.skills = body.skills.split(',')
    }

    return mergeFields({
      user: user.id,
      ...body,
    })
  }

  createOrUpdate() {
    return this.Model.findOneAndUpdate(
      { user: this.req.user.id },
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
