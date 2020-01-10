import Model from 'src/models/Profile'
import Controller from '../Controller'

class Profile extends Controller {
  setModel() {
    this.Model = Model
  }

  render() {
    this.process()
      .then(data => this.success(data))
      .catch(err => this.fail(err.message))
  }
}

export default Profile
