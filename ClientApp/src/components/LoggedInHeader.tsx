import React from 'react'
import logo from '../images/daitree6.svg'
import '../css/homeHeader.scss'
import { Link } from 'react-router-dom'

export function LoggedInHeader() {
  return (
    <>
      <header id="main-header">
        <nav id="header-content">
          <div className="header-alignment left">
            <span className="gradient skew">
              <div className="logo un-skew">
                <div className="logo-box">
                  {/* Change this later... */}
                  <Link to="/">
                    <img src={logo} />
                  </Link>
                </div>
              </div>
            </span>
            {/* Search bar needs to go here eventually... & Remove hover effect... */}
            {/* <div>Hello</div> */}
          </div>
          <div className="header-alignment right">
            {/* Change this later... */}
            <Link to="/" className="header-link active">
              <span className="header-link-span">
                <span className="u-nav">Home</span>
              </span>
            </Link>
            {/* Change this later... */}
            <a href="#" className="header-link">
              <span className="header-link-span">
                <span className="u-nav">About</span>
              </span>
            </a>
            {/* Change this later... */}
            <a href="#" className="header-link">
              <span className="header-link-span">
                <span className="u-nav">Contact</span>
              </span>
            </a>
            {/* Change this later... */}
            <Link to="/signin" className="header-link">
              <span className="header-link-span">
                <span className="u-nav">Sign In</span>
              </span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}
