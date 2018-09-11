import DeletePull from './DeletePull'

class DeleteExperience extends DeletePull {
  // eslint-disable-next-line class-methods-use-this
  get key() {
    return 'experience'
  }
}

export default (req, res) => new DeleteExperience(req, res)
