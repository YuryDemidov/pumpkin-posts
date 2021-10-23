import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Posts from '../pages/Posts'
import About from '../pages/About'
import Error from '../pages/Error'
import SinglePost from '../pages/SinglePost'

const AppRouter = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <Posts />
      </Route>
      <Route path='/posts' exact>
        <Posts />
      </Route>
      <Route path='/posts/:id'>
        <SinglePost />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/error'>
        <Error />
      </Route>
      <Redirect to='/error' />
    </Switch>
  )
}

export default AppRouter
