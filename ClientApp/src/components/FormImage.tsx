import React from 'react'
import whiteCircle from '../images/form/white-circle.svg'
import laptop from '../images/form/laptop.svg'
import user from '../images/form/user.svg'
import square from '../images/form/square.svg'
import abstractTriangle from '../images/form/abstract-triangle.svg'
import fancyTriangle from '../images/form/fancy-triangle.svg'
import blueCircle from '../images/form/blue-circle.svg'
import redCircle from '../images/form/red-circle.svg'
import formImage from '../css/formImage.module.scss'

export function FormImage() {
  return (
    <div className={formImage['form-image']}>
      <div className={formImage['white-circle']}>
        <img src={whiteCircle} />
      </div>

      <div className={formImage['laptop']}>
        <img src={laptop} />
      </div>

      <div className={formImage['user']}>
        <img src={user} />
      </div>

      <div className={formImage['blue-circle']}>
        <img src={blueCircle} />
      </div>

      <div className={formImage['fancy-triangle']}>
        <img src={fancyTriangle} />
      </div>

      <div className={formImage['red-circle']}>
        <img src={redCircle} />
      </div>

      <div className={formImage['abstract-triangle']}>
        <img src={abstractTriangle} />
      </div>

      <div className={formImage['square']}>
        <img src={square} />
      </div>
    </div>
  )
}
