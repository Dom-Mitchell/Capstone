import React from 'react'
import logo from './icons/header/dai5.svg'

export function mainHeader() {
  return (
    <>
      <header id="main-header">
        <nav id="header-content">
          <div className="header-alignment left">
            <span className="gradient skew">
              <div className="logo un-skew">
                <div className="logo-box">
                  {/* Change this later... */}
                  <a href="#">
                    <img src={logo} />
                  </a>
                </div>
              </div>
            </span>
            {/* Search bar needs to go here eventually... & Remove hover effect... */}
            {/* <div>Hello</div> */}
          </div>
          <div className="header-alignment right">
            {/* Change this later... */}
            <a href="#" className="header-link active">
              <span className="header-link-span">
                <span className="u-nav">Home</span>
              </span>
            </a>
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
            <a href="#" className="header-link">
              <span className="header-link-span">
                <span className="u-nav">Sign In</span>
              </span>
            </a>
          </div>
        </nav>
      </header>
    </>
  )
}
