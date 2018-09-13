import Control from '../Control'
import Post from '../../models/Post'

class Posts extends Control {
  setModel() {
    this.Model = Post
  }

  success(data) {
    this.res.json(data)
  }

  render() {
    this.process()
      .then(data => this.success(data))
      .catch(err => this.fail(err.message))
  }
}

export default Posts
