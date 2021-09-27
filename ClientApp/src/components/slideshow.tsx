import React, { useEffect } from 'react'

export function Slideshow() {
  useEffect(() => {
    let slideIndex = 0

    const showSlides = () => {
      let i
      //                                                         ask Gavin about type
      // const slides = document.getElementsByClassName('slide') as HTMLCollectionOf<HTMLElement>
      const slides = document.getElementsByClassName('slide') as any
      const dots = document.getElementsByClassName('slide-dot')

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
      }
      slideIndex++

      if (slideIndex > slides.length) {
        slideIndex = 1
      }

      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' slide-active', '')
      }

      slides[slideIndex - 1].style.display = 'block'
      dots[slideIndex - 1].className += ' slide-active'
      setTimeout(showSlides, 4000)
    }

    showSlides()
  }, [])

  return (
    <>
      <div className="slideshow-container">
        <div className="slide">
          <div className="slide-numbertext">1 / 3</div>
          <img
            src="https://cdn.mos.cms.futurecdn.net/5FmFtc974AjN255w6iELLj-1024-80.jpg.webp"
            alt="#"
          />
          <div className="slide-caption">Image 1</div>
        </div>

        <div className="slide">
          <div className="slide-numbertext">2 / 3</div>
          <img
            src="https://i.pinimg.com/564x/29/5e/f1/295ef10b18da247705c6dbcc373020cd.jpg"
            alt="#"
          />
          <div className="slide-caption">Image 2</div>
        </div>

        <div className="slide">
          <div className="slide-numbertext">3 / 3</div>
          <img src="http://placekitten.com/200/200" alt="#" />
          <div className="slide-caption">Image 3</div>
        </div>
      </div>

      <div className="slide-dots">
        <span className="slide-dot"></span>
        <span className="slide-dot"></span>
        <span className="slide-dot"></span>
      </div>
    </>
  )
}
