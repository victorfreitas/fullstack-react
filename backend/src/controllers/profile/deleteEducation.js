import DeletePull from './DeletePull'

class DeleteEducation extends DeletePull {
  // eslint-disable-next-line class-methods-use-this
  get key() {
    return 'education'
  }
}

export default (req, res) => new DeleteEducation(req, res)
