import Posts from './Posts'
import isEmpty from '../../helpers/isEmpty'

class RemovePost extends Posts {
  process() {
    return this.Model.findOneAndDelete({
      _id: this.params.id,
      user: this.user.id,
    })
  }

  success(post) {
    const success = !isEmpty(post)
    this.res.status(success ? 200 : 400).json({ success })
  }
}

export default (req, res) => new RemovePost(req, res)
