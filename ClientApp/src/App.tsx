import React from 'react'
import logo from './icons/header/dai5.svg'
import monk from './icons/footer/favicon.png'

let slideIndex = 0
showSlides()

function showSlides() {
  let i
  const slides = document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>
  const dots = document.getElementsByClassName('dot')
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slideIndex++
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' active'
  setTimeout(showSlides, 3000) // Change image every 3 seconds
}

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
            {/* Search bar need to go here eventually... & Remove hover effect... */}
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

      {/* <section> */}
        <>
        <div className="slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext">1 / 4</div>
            <img
              src="https://i.pinimg.com/564x/29/5e/f1/295ef10b18da247705c6dbcc373020cd.jpg"
              width="200px" 
              height="200px"
              alt="Spot"
            />
            <div className="text">Spot</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext">2 / 4</div>
            <img
              src="http://placekitten.com/200/200"
              width="200px" 
              height="200px"
              alt="Adeline"
            />
            <div className="text">Adeline</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext">3 / 4</div>
            <img
              src="https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.6435-9/53313381_2817082665183003_5645404669988569088_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=We32W4lAJnEAX82bf50&_nc_ht=scontent.ftpa1-2.fna&oh=31cd1b3f873cbeb3b110e4e961d9e898&oe=614FD82B"
              width="200px" 
              height="200px"
              alt="Perspex"
            />
            <div className="text3">Perspex</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext4">4 / 4</div>
            <img
              src="https://cdn.mos.cms.futurecdn.net/5FmFtc974AjN255w6iELLj-1024-80.jpg.webp"
              width="200px" 
              height="200px"
              alt="Mr. Grumpy"
            />
            <div className="text">Mr. Grumpy</div>
          </div>
        </div>
      {/* </section> */}

      <footer>
        <img src={monk} alt="Monk" />
      </footer>
    </>
    )
    }
