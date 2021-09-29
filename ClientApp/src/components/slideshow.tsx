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
        <span
          className={slideIndex === 1 ? 'slide-dot slide-active' : 'slide-dot'}
        ></span>
        <span
          className={slideIndex === 2 ? 'slide-dot slide-active' : 'slide-dot'}
        ></span>
      </div>
    </>
  )
}
