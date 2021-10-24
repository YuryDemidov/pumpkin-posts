import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { privateRoutes, publicRoutes } from '../router'
import { AuthContext } from '../context'

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext)
  const routes = isAuth ? privateRoutes : publicRoutes

  if (isLoading) {
    return ''
  }

  return (
    <Switch>
      {routes.map(route => (
        <Route path={route.path} component={route.component} exact={route.exact} key={route.path} />
      ))}
      <Redirect to={routes[0].path} />
    </Switch>
  )
}

export default AppRouter
