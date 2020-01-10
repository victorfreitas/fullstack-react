import debug from 'src/debug'
import isEmpty from 'src/helpers/isEmpty'

class Controller {
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

    this.success = this.success.bind(this)
    this.fail = this.fail.bind(this)
  }

  setModel() {
    this.Model = {}
  }

  success(data) {
    if (isEmpty(data)) {
      this.fail(this.notFoundMessage, 404)
      return
    }

    this.res.json(data)
  }

  fail(error, code = 500) {
    this.res.status(code).json({ errors: [error] })
  }

  render() {} // eslint-disable-line class-methods-use-this
}

export default Controller
