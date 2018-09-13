import Profile from './Profile'

class FieldToSet extends Profile {
  process() {
    return this.Model.findOneAndUpdate(
      { user: this.user.id },
      { $addToSet: this.getFields() },
      { new: true, upsert: true }
    )
  }
}

export default FieldToSet
