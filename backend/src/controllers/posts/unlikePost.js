import Posts from './Posts'

class UnlikePost extends Posts {
  process() {
    return this.Model.findOneAndUpdate(
      { _id: this.params.id },
      { $pull: { likes: { user: this.user.id } } },
      { new: true }
    ).select(['likes', '-_id'])
  }
}

export default (req, res) => new UnlikePost(req, res)
