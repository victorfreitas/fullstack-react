import Users from './Users'

class Current extends Users {
  render() {
    this.res.json({
      id: this.user.id,
      name: this.user.name,
      email: this.user.email,
      avatar: this.user.avatar,
    })
  }
}

export default (req, res) => new Current(req, res)
