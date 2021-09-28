import React, { useEffect, useState } from 'react'

export function Slideshow() {
  const slideCount = 3
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(
    function () {
      const timeOutId = setTimeout(
        () =>
          function () {
            setSlideIndex((slideIndex) => (slideIndex + 1) % slideCount)
          },
        3000
      ) // Change image every 3 seconds

      return function () {
        clearInterval(timeOutId)
      }
    },
    [slideCount]
  )

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
          <img
            src="https://cdn.mos.cms.futurecdn.net/5FmFtc974AjN255w6iELLj-1024-80.jpg.webp"
            alt="Test Image 1"
          />
          <div className="slide-caption">Image 1</div>
        </div>

        <div
          className="slide"
          style={{ display: slideIndex === 1 ? undefined : 'none' }}
        >
          <div className="slide-numbertext">2 / 3</div>
          <img
            src="https://i.pinimg.com/564x/29/5e/f1/295ef10b18da247705c6dbcc373020cd.jpg"
            alt="Test Image 2"
          />
          <div className="slide-caption">Image 2</div>
        </div>

        <div
          className="slide"
          style={{ display: slideIndex === 2 ? undefined : 'none' }}
        >
          <div className="slide-numbertext">3 / 3</div>
          <img src="http://placekitten.com/200/200" alt="Test Image 3" />
          <div className="slide-caption">Image 3</div>
        </div>
      </div>

      <div className="slide-dots">
        {/* <span className={{slideIndex === 0 ? 'slide-active' : 'slide-dot'}}</span> */}
        <span className="slide-dot"></span>
        {/* <span className={{slideIndex === 1 ? 'slide-active' : 'slide-dot'}}</span> */}
        <span className="slide-dot"></span>
        {/* <span className={{slideIndex === 2 ? 'slide-active' : 'slide-dot'}}</span> */}
        <span className="slide-dot"></span>
      </div>
    </>
  )
}
