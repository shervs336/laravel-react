import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <nav className='navbar navbar-expand-md navbar-dark bg-dark navbar-laravel'>
    <div className='container'>
      <Link className='navbar-brand' to='/'>Tasksman</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className='nav-link' to='/projects'>Projects <span className="sr-only">(current)</span></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
