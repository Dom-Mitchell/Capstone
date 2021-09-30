import React from 'react'
// import { Slideshow } from './components/slideshow'
// import { SignIn } from './pages/SignIn'
import { CreateAccount } from './pages/CreateAccount'
import { MainHeader } from './components/MainHeader'
// import { MainFooter } from './components/AbsoluteFooter'
// import { FormImage } from './components/FormImage'

export function App() {
  return (
    <>
      {/* Header */}
      <MainHeader />

      {/* <Slideshow /> */}
      {/* <FormImage/> */}
      {/* <SignIn /> */}
      <CreateAccount />

      {/* Footer */}
      {/* <MainFooter /> */}
    </>
  )
}
