import React, { useEffect, useState } from 'react'
import slideShow from '../css/slideshow.module.scss'
import SignIn from '../images/slideshow/sign-in-page.png'

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

  const dots = [0, 1, 2]

  return (
    <>
      <div className={slideShow['slideshow-container']}>
        <div
          className={slideShow.slide}
          style={{ display: slideIndex === 0 ? undefined : 'none' }}
        >
          <div className={slideShow['slide-numbertext']}>1 / 3</div>
          <img
            className={slideShow['slide-image']}
            src={SignIn}
            alt="Sign In Page"
          />
          <div className={slideShow['slide-caption']}>Sign In Page</div>
        </div>

        <div
          className={slideShow.slide}
          style={{ display: slideIndex === 1 ? undefined : 'none' }}
        >
          <div className={slideShow['slide-numbertext']}>2 / 3</div>
          <img
            className={slideShow['slide-image']}
            src="#"
            alt="Test Image 2"
          />
          <div className={slideShow['slide-caption']}>Image 2</div>
        </div>

        <div
          className={slideShow.slide}
          style={{ display: slideIndex === 2 ? undefined : 'none' }}
        >
          <div className={slideShow['slide-numbertext']}>3 / 3</div>
          <img
            className={slideShow['slide-image']}
            src="#"
            alt="Test Image 3"
          />
          <div className={slideShow['slide-caption']}>Image 3</div>
        </div>
      </div>

      <div className={slideShow['slide-dots']}>
        {/* {`${signIn['form-input']} ${signIn['validate-form-input']}`} */}
        {dots.map((dot) => (
          <span
            key={dot}
            className={
              slideIndex === dot
                ? `${slideShow['slide-dot']} ${slideShow['slide-active']}`
                : slideShow['slide-dot']
            }
          ></span>
        ))}
      </div>
    </>
  )
}
