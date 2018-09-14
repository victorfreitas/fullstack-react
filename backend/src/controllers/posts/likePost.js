import Posts from './Posts'
import isEmpty from '../../helpers/isEmpty'

class LikePost extends Posts {
  process() {
    return this.Model.findOne({
      _id: this.params.id,
      likes: {
        $elemMatch: { user: this.user.id },
      },
    }).select(['_id'])
  }

  addLike() {
    return this.Model.findOneAndUpdate(
      { _id: this.params.id },
      { $push: { likes: { user: this.user.id } } },
      { new: true }
    ).select(['likes', '-_id'])
  }

  success(post) {
    if (!isEmpty(post)) {
      this.res.status(400).json({ error: 'Your already liked this post' })
      return
    }

    this.addLike()
      .then(likes => this.res.json(likes))
      .catch(err => this.fail(err.message))
  }
}

export default (req, res) => new LikePost(req, res)
