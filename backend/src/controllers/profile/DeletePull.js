import Profile from './Profile'

class DeletePull extends Profile {
  process() {
    return this.Model.findOneAndUpdate(
      { user: this.user.id },
      {
        $pull: {
          [this.key]: { _id: this.params.id },
        },
      },
      { new: true, upsert: true, multi: false }
    )
  }
}

export default DeletePull
