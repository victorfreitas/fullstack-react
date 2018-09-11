import Profile from './Profile'

class DeletePull extends Profile {
  delete() {
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

  success(profile) {
    this.res.json(profile)
  }

  render() {
    this.delete()
      .then(profile => this.success(profile))
      .catch(err => this.fail(err.message))
  }
}

export default DeletePull
