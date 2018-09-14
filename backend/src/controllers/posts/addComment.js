import Posts from './Posts'

class AddComment extends Posts {
  get comment() {
    const { text, name, avatar } = this.body

    return {
      comments: {
        $position: 0,
        $each: [{
          user: this.user.id,
          text,
          name,
          avatar,
        }],
      },
    }
  }

  process() {
    return this.Model.findOneAndUpdate(
      { _id: this.params.id },
      { $push: this.comment },
      { new: true }
    ).select(['comments', '-_id'])
  }
}

export default (req, res) => new AddComment(req, res)
