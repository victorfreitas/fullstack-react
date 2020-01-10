import User from 'src/models/User'
import Controller from '../Controller'

class Users extends Controller {
  setModel() {
    this.Model = User
  }
}

export default Users
