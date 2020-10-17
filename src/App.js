import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Home } from './components/layout/Home'
import { Landing } from './components/layout/Landing'
import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'
import { Feed } from './components/layout/Feed'
import { UserPage } from './components/layout/UserPage';

export const App = () => {



  const checkAuth = async () => {

    try {
      const res = await fetch('http://localhost:5000/auth/verify', {
        method: 'POST',
        headers: {
          'x-auth-token': localStorage.token
        }
      })

      const parseRes = await res.json()

      parseRes === true ? setIsAuth(true) : setIsAuth(false)
      

    } catch (err) {
      console.log(err.message)
    }
  }

  const getUserInfo = () => {
    try {

      // async()
      // const res = await fetch('http://localhost:5000/user/info', {
      //   method: 'GET',
      //   headers: {
      //     'x-auth-token': localStorage.token
      //   }
      // })

      // const parseRes = await res.json()

      // setUser(parseRes)

      fetch('http://localhost:5000/user/info', {
        method: 'GET',
        headers: {
              'x-auth-token': localStorage.token
            }
      }).then( res => res.json())
      .then(data => setUser(data))

    } catch (err) {
      console.log(err.message)
    }
  }

  const setAuth = (x) => {
    setIsAuth(x)
    getUserInfo()
  }

  const [user, setUser] = useState({})
  const [isAuth, setIsAuth] = useState(false)

  useEffect( () => {
    checkAuth()
  }, [])

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <React.Fragment>
          <Navbar user={user} isAuth={isAuth} setAuth={setAuth} />
          <Switch>
            <Route exact path='/feed' render={ () => <Feed/> }/>
            <Route exact path='/signup' render={ (props) => !isAuth ? ( <Register isAuth={isAuth} setAuth={setAuth} />) : ( <Redirect to='/' /> ) } />
            <Route exact path='/user/:username' render={ (props) => <UserPage {...props} /> } />
            <Route exact path='/signin' render={ (props) => !isAuth ? ( <Login isAuth={isAuth} setAuth={setAuth} /> ) : ( <Redirect to='/' /> )  } />
            <Route exact path='/' render={ (props) => isAuth ? ( <Home /> ) : ( <Landing /> )} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
  )
}

