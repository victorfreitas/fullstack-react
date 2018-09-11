import deepmerge from 'deepmerge'

export const defaultEducation = {
  school: '',
  degree: '',
  fieldofstudy: '',
  from: '',
  to: '',
  current: false,
  description: '',
}

export const defaultExperience = {
  title: '',
  company: '',
  location: '',
  from: '',
  to: '',
  current: false,
  description: '',
}

export const defaultFields = {
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
  social: {
    youtube: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    instagram: '',
  },
  date: Date.now(),
}

export const mergeEducation = body => deepmerge(defaultEducation, body)

export const mergeExperience = body => deepmerge(defaultExperience, body)

export default body => deepmerge(defaultFields, body)
