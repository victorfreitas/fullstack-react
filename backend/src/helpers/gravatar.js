import gravatar from 'gravatar'

const defaultOptions = {
  s: 200,
  r: 'pg',
  d: 'mm',
}

export const gravatarUrl = (email, options = {}) => (
  gravatar.url(email, { ...defaultOptions, ...options })
)

export default gravatar
