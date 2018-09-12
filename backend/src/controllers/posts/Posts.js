import Control from '../Control'
import Post from '../../models/Post'

class Posts extends Control {
  setModel() {
    this.Model = Post
  }
}

export default Posts
