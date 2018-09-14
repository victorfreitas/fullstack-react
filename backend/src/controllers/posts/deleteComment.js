import Posts from './Posts'

class DeleteComment extends Posts {
  process() {
    return this.Model.findOneAndUpdate(
      { _id: this.params.id },
      { $pull: { comments: { _id: this.params.commentId } } },
      { new: true }
    ).select(['comments', '-_id'])
  }
}

export default (req, res) => new DeleteComment(req, res)
