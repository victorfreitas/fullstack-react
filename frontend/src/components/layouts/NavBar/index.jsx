import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import NavLink from './NavLink'

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            DevConnector
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <NavLink title="Developers" path="/profiles" />
            </ul>

            <ul className="navbar-nav ml-auto">
              <NavLink title="Sign Up" path="/register" />
              <NavLink title="Login" path="/login" />
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
