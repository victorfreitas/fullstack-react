import Posts from './Posts'

class CreatePost extends Posts {
  save() {
    const post = new this.Model({
      text: this.body.text,
      name: this.body.name,
      avatar: this.body.avatar,
      user: this.user.id,
    })

    return post.save()
  }

  success(post) {
    this.res.json(post)
  }

  render() {
    this.save()
      .then(post => this.success(post))
      .catch(err => this.fail(err.message))
  }
}

export default (req, res) => new CreatePost(req, res)
