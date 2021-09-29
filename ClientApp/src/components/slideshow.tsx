import React, { useEffect, useState } from 'react'
import '../css/slideshow.scss'

export function Slideshow() {
  const slideCount = 3
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const timeOutId = setInterval(() => {
      setSlideIndex((slideIndex) => (slideIndex + 1) % slideCount)
    }, 3000) // Change image every 3 seconds

    return () => {
      clearInterval(timeOutId)
    }
  }, [slideCount])

  // useEffect(() => {
  //   let slideIndex = 0

  //   const showSlides = () => {
  //     let i
  //     //                                                         ask Gavin about type
  //     const slides = document.getElementsByClassName('slide')
  //     // const slides = document.getElementsByClassName('slide') as any
  //     const dots = document.getElementsByClassName('slide-dot')

  //     for (i = 0; i < slides.length; i++) {
  //       const element = slides[i] as HTMLDivElement
  //       element.style.display = 'none'
  //     }
  //     slideIndex++

  //     if (slideIndex > slides.length) {
  //       slideIndex = 1
  //     }

  //     for (i = 0; i < dots.length; i++) {
  //       dots[i].className = dots[i].className.replace(' slide-active', '')
  //     }

  //     slides[slideIndex - 1].style.display = 'block'
  //     dots[slideIndex - 1].className += ' slide-active'
  //     setTimeout(showSlides, 3000) // Change image every 3 seconds
  //   }

  //   showSlides()
  // }, [])

  return (
    <>
      <div className="slideshow-container">
        <div
          className="slide"
          style={{ display: slideIndex === 0 ? undefined : 'none' }}
        >
          <div className="slide-numbertext">1 / 3</div>
          <img src="#" alt="Test Image 1" />
          <div className="slide-caption">Image 1</div>
        </div>

        <div
          className="slide"
          style={{ display: slideIndex === 1 ? undefined : 'none' }}
        >
          <div className="slide-numbertext">2 / 3</div>
          <img src="#" alt="Test Image 2" />
          <div className="slide-caption">Image 2</div>
        </div>

        <div
          className="slide"
          style={{ display: slideIndex === 2 ? undefined : 'none' }}
        >
          <div className="slide-numbertext">3 / 3</div>
          <img src="#" alt="Test Image 3" />
          <div className="slide-caption">Image 3</div>
        </div>
      </div>

      <div className="slide-dots">
        <span
          className={slideIndex === 0 ? 'slide-dot slide-active' : 'slide-dot'}
        ></span>
        {/* <span className="slide-dot"></span> */}
        <span
          className={slideIndex === 1 ? 'slide-dot slide-active' : 'slide-dot'}
        ></span>
        {/* <span className="slide-dot"></span> */}
        <span
          className={slideIndex === 2 ? 'slide-dot slide-active' : 'slide-dot'}
        ></span>
        {/* <span className="slide-dot"></span> */}
      </div>
    </>
  )
}
