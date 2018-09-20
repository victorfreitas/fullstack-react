import React from 'react'

import { Link } from 'react-router-dom'

const NavLink = ({ title, path }) => (
  <li className="nav-item">
    <Link className="nav-link" to={path}>
      {title}
    </Link>
  </li>
)

export default NavLink
