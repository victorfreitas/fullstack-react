import Control from '../Control'
import User from '../../models/User'

class Users extends Control {
  setModel() {
    this.Model = User
  }
}

export default Users
