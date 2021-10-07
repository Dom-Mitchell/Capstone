import React from 'react'
import { SignIn } from './pages/SignIn'
import { CreateAccount } from './pages/CreateAccount'
import { Route, Switch } from 'react-router'
import { Home } from './pages/Home'
// import { MainHeader } from './components/MainHeader'
import { MiniMap } from './pages/MiniMap'
import { Map } from './pages/Map'
// import { Park } from './pages/Park'
import { MtRainier } from './pages/MtRainier'

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
        <Route exact path="/miniMap">
          <MiniMap />
        </Route>
        <Route exact path="/map">
          <Map />
        </Route>
        {/* <Route exact path="/parks:id">
          <Park />
        </Route> */}
        <Route exact path="/mtRainier">
          <MtRainier />
        </Route>
      </Switch>

      {/* <MainHeader /> */}
      {/* <CreateAccount /> */}
      {/* <SignIn /> */}
      {/* <Home /> */}

      {/* <Map /> */}
      {/* <MtRainier /> */}
    </>
  )
}
