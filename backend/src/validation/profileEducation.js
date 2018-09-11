import isEmpty from '../helpers/isEmpty'

export default (req, res, next) => {
  const errors = []
  const {
    school = '',
    degree = '',
    fieldofstudy = '',
    from = '',
  } = req.body

  if (isEmpty(school)) {
    errors.push('School field is required')
  }

  if (isEmpty(degree)) {
    errors.push('Degree field is required')
  }

  if (isEmpty(fieldofstudy)) {
    errors.push('Field of study is required')
  }

  if (isEmpty(from)) {
    errors.push('From date field is required')
  }

  return errors.length ? res.status(400).json({ errors }) : next()
}
