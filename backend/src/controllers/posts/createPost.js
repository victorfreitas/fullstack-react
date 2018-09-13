import Posts from './Posts'

class CreatePost extends Posts {
  process() {
    const post = new this.Model({
      text: this.body.text,
      name: this.body.name,
      avatar: this.body.avatar,
      user: this.user.id,
    })

    return post.save()
  }
}

export default (req, res) => new CreatePost(req, res)
