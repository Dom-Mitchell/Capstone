import React from 'react'
import whiteCircle from '../images/form/white-circle.svg'
import laptop from '../images/form/laptop.svg'
import user from '../images/form/user.svg'
import square from '../images/form/square.svg'
import abstractTriangle from '../images/form/abstract-triangle.svg'
import fancyTriangle from '../images/form/fancy-triangle.svg'
import blueCircle from '../images/form/blue-circle.svg'
import redCircle from '../images/form/red-circle.svg'
import '../css/formImage.scss'

export function FormImage() {
  return (
    <div className="form-image">
      <div className="white-circle">
        <img src={whiteCircle} />
      </div>

      <div className="laptop">
        <img src={laptop} />
      </div>

      <div className="user">
        <img src={user} />
      </div>

      <div className="blue-circle">
        <img src={blueCircle} />
      </div>

      <div className="fancy-triangle">
        <img src={fancyTriangle} />
      </div>

      <div className="red-circle">
        <img src={redCircle} />
      </div>

      <div className="abstract-triangle">
        <img src={abstractTriangle} />
      </div>

      <div className="square">
        <img src={square} />
      </div>

    </div>
  )
}
