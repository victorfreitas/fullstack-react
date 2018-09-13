import Posts from './Posts'

class GetPosts extends Posts {
  process() {
    return this.Model.find()
      .select(['-__v'])
      .sort({ date: -1 })
  }
}

export default (req, res) => new GetPosts(req, res)
