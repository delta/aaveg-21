import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { publicRoutes, privateRoutes, adminRoutes } from './routes'
import { useSelector, useDispatch } from 'react-redux'
import { auth } from '../actions/user'
import { P404 } from '../pages/404'
// import firebase from '../firebase'

export const Routes = () => {
  const dispatch = useDispatch()
  // const online =
  //   useSelector((state) => state.network).network || navigator.onLine
  // React.useEffect(() => {
  // const msg = firebase.messaging();
  // msg.requestPermission().then(() => {
  //     return msg.getToken();
  // }).then((data) => {
  //     console.warn("token", data)
  // })
  // }, [])
  React.useEffect(() => {
    dispatch(auth())
  }, [dispatch])
  const user = useSelector(state => state.user)
  console.log(user)
  let isAuth = false
  if (user) {
    isAuth = user.isAuthenticated
  }
  return (
    <Router>
      <Switch>
        {publicRoutes.map((route) => (
          <Route
            exact
            component={route.component}
            path={route.url}
            key={route.url}
          />
        ))}
        {isAuth && privateRoutes.map((route) => (
          <Route
            exact
            component={route.component}
            path={route.url}
            key={route.url}
          />
        ))}
        {adminRoutes.map((route) => (
          <Route
            exact
            component={route.component}
            path={route.url}
            key={route.url}
          />
        ))}
        <Route component={P404} />
      </Switch>
    </Router>
  )
}
