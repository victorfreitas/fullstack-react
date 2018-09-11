import Profile from './Profile'

class FieldToSet extends Profile {
  addToSet() {
    return this.Model.findOneAndUpdate(
      { user: this.user.id },
      { $addToSet: this.getFields() },
      { new: true, upsert: true }
    )
  }

  success(profile) {
    this.res.json(profile)
  }

  render() {
    this.addToSet()
      .then(profile => this.success(profile))
      .catch(err => this.fail(err.message))
  }
}

export default FieldToSet
