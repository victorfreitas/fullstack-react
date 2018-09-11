import isEmpty from '../helpers/isEmpty'

export default (req, res, next) => {
  const errors = []
  const { title = '', company = '', from = '' } = req.body

  if (isEmpty(title)) {
    errors.push('Job title field is required')
  }

  if (isEmpty(company)) {
    errors.push('Company field is required')
  }

  if (isEmpty(from)) {
    errors.push('From date field is required')
  }

  return errors.length ? res.status(400).json({ errors }) : next()
}
