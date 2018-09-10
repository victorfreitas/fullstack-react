import debug from '../debug'

class Control {
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
