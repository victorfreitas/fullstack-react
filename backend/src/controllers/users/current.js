import Users from './Users'

class Current extends Users {
  render() {
    const { user } = this.req

    this.res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    })
  }
}

export default (req, res) => new Current(req, res)
