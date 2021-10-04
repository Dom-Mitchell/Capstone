import React from 'react'
import { SignIn } from './pages/SignIn'
import { CreateAccount } from './pages/CreateAccount'
import { Route, Switch } from 'react-router'
import { Home } from './pages/Home'
import { MainHeader } from './components/MainHeader'
import { MiniMap } from './pages/MiniMap'

export function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route exact path="/about"> */}
        {/* <About /> */}
        {/* </Route>
        <Route exact path="/contact">
      {/* // <Contact /> */}
        {/* </Route> */}
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/createaccount">
          <CreateAccount />
        </Route>
      </Switch>

      {/* <MainHeader /> */}
      {/* <CreateAccount /> */}
      {/* <SignIn /> */}
      {/* <Home /> */}

      {/* <MiniMap /> */}
    </>
  )
}
