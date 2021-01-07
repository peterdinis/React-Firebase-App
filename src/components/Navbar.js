import React from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">React Employees Site</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/add' className="nav-link active" aria-current="page">Add Employee</Link>
              </li>
              <li className="nav-item">
                <Link to='/signin' className="nav-link">SignIn</Link>
              </li>
              <li className="nav-item">
                <Link to='/signup' className="nav-link">Signup</Link>
              </li>
              <li className='nav-item'>
                <Link to='/employees' className='nav-link'>All Employees</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
