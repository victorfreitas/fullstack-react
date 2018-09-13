import Posts from './Posts'

class GetPostById extends Posts {
  process() {
    return this.Model.findById(this.params.id)
  }
}

export default (req, res) => new GetPostById(req, res)
