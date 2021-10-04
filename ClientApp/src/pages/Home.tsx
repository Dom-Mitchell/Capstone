import React from 'react'
import { Slideshow } from '../components/Slideshow'
import { MainHeader } from '../components/MainHeader'
import { AbsoluteFooter } from '../components/AbsoluteFooter'

export function Home() {
  return (
    <>
      <MainHeader />
      <Slideshow />
      <AbsoluteFooter />
    </>
  )
}
