import React from 'react'
// import { Slideshow } from './components/slideshow'
import { SignIn } from './pages/SignIn'
import { MainFooter } from './components/MainFooter'
import { MainHeader } from './components/MainHeader'

export function App() {
  return (
    <>
      {/* Header */}
      <MainHeader />

      {/* <Slideshow /> */}
      <SignIn />

      {/* Footer */}
      <MainFooter />
    </>
  )
}
