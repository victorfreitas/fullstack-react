import Landing from '../layouts/Landing'
import { Login, Register } from '../auth'

export default [
  {
    path: '/',
    exact: true,
    component: Landing,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/register',
    exact: true,
    component: Register,
  },
]
