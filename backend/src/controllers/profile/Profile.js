import Control from '../Control'
import Model from '../../models/Profile'
import isEmpty from '../../helpers/isEmpty'

class Profile extends Control {
  setModel() {
    this.Model = Model
  }

  success(data) {
    if (isEmpty(data)) {
      this.fail(this.notFoundMessage, 404)
      return
    }

    this.res.json(data)
  }

  render() {
    this.process()
      .then(data => this.success(data))
      .catch(err => this.fail(err.message))
  }
}

export default Profile
