import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Home } from './components/layout/Home'
import { Landing } from './components/layout/Landing'
import axios from 'axios';

export const App = () => {

  const checkAuth = async () => {
    try {
      const res = await fetch('http://localhost:5000/auth/verify', {
        method: 'POST',
        headers: {
          jwt_token: localStorage.token
        }
      })

      const parseRes = await res.json()

      parseRes === true ? setIsAuth(true) : setIsAuth(false)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect( () => {
    checkAuth()
  }, [])

  const [isAuth, setIsAuth] = useState(false)

  const setAuth = (x) => {
    setIsAuth(x)
  }

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <React.Fragment>
          <Navbar isAuth={isAuth} setAuth={setAuth} />
          <Switch>
            <Route exact path='/' render={ (props) => isAuth ? ( <Home /> ) : ( <Landing /> )} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
  )
}

