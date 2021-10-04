import React from 'react'
import relativeFooter from '../css/relativeFooter.module.scss'

export function RelativeFooter() {
  return (
    <>
      <footer className={relativeFooter['relative-footer']}>
        <p>
          <q>The mountains are calling and I must go.</q> - John Muir
        </p>
      </footer>
    </>
  )
}
