import User from '../../models/User'
import debug from '../../debug'

class Users {
  constructor(req, res) {
    this.req = req
    this.res = res

    this.init()
    this.render()
  }

  init() {
    const { query, body } = this.req

    this.query = query
    this.body = body
    this.Model = User
    this.debug = debug.bind(debug, 'usersController')
  }

  render() {}
}

export default Users
