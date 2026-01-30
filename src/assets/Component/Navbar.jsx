import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
     <nav className="navbar navbar-expand-lg  py-4 position-fixed top-0 start-0 end-0">
            <div className="container">
              <NavLink className="navbar-brand text-white text-uppercase fw-bolder fs-2" to=".">START FRAMEWORK</NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link ms-3 rounded-12  text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to="/About">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link ms-3 rounded-12  text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to="/Portfolio">Portfolio</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link ms-3 rounded-12  text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to="/Contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
  )
}
