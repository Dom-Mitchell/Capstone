import React from 'react'
// import { Slideshow } from './components/slideshow'
import logo from './images/daitree6.svg'
import { SignIn } from './pages/SignIn'
// import monk from './icons/footer/favicon.png'

export function App() {
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

      {/* <Slideshow /> */}
      <SignIn />

      <footer>
        <p>
          <q>The mountains are calling and I must go.</q> - John Muir
        </p>
      </footer>
    </>
  )
}
