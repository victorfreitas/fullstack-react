import Controller from '../Controller'
import Post from '../../models/Post'

class Posts extends Controller {
  setModel() {
    this.Model = Post
  }

  render() {
    this.process()
      .then(this.success)
      .catch(err => this.fail(err.message))
  }
}

export default Posts
