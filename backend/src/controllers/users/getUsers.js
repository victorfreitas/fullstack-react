import Users from './Users'

class GetUsers extends Users {
  render() {
    this.res.send('Get Users')
  }
}

export default (req, res) => new GetUsers(req, res)
