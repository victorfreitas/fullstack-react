import deepmerge from 'deepmerge'

export const education = {
  school: '',
  degree: '',
  fieldofstudy: '',
  from: '',
  to: '',
  current: false,
  description: '',
}

export const experience = {
  title: '',
  company: '',
  location: '',
  from: '',
  to: '',
  current: false,
  description: '',
}

const defaultFields = {
  user: '',
  handle: '',
  company: '',
  website: '',
  location: '',
  status: '',
  skills: [],
  bio: '',
  github: {
    username: '',
  },
  experience: [],
  education: [],
  social: {
    youtube: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    instagram: '',
  },
  date: Date.now(),
}

export default fields => deepmerge(defaultFields, fields)
