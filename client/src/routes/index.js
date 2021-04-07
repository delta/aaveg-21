import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { publicRoutes, privateRoutes, adminRoutes } from "./routes";
// import firebase from '../firebase'

export const Routes = () => {
  const online =
    useSelector((state) => state.network).network || navigator.onLine;
  React.useEffect(() => {
      // const msg = firebase.messaging();
      // msg.requestPermission().then(() => {
      //     return msg.getToken();
      // }).then((data) => {
      //     console.warn("token", data)
      // })
      console.clear()
  })
  return (
    <Switch>
      {online ? null : <div>You are offline</div>}
      {publicRoutes.map((route) => (
        <Route
          exact
          component={route.component}
          path={route.url}
          key={route.url}
        />
      ))}
      {privateRoutes.map((route) => (
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
    </Switch>
  );
};
