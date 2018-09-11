import debug from '../debug'

class Control {
  constructor(req, res) {
    this.req = req
    this.res = res

    this.init()
    this.render()
  }

  init() {
    this.user = this.req.user
    this.params = this.req.params
    this.query = this.req.query
    this.body = this.req.body
    this.debug = debug.bind(debug, 'controller')

    this.setModel()
  }

  setModel() {
    this.Model = {}
  }

  fail(error, code = 500) {
    this.res.status(code).json({ errors: [error] })
  }

  render() {}
}

export default Control
