import React from 'react'
import absoluteFooter from '../css/absoluteFooter.module.scss'

export function AbsoluteFooter() {
  return (
    <>
      <footer className={absoluteFooter['absolute-footer']}>
        <p>
          <q>The mountains are calling and I must go.</q> - John Muir
        </p>
      </footer>
    </>
  )
}
