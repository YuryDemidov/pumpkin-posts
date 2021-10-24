import About from '../pages/About'
import Posts from '../pages/Posts'
import SinglePost from '../pages/SinglePost'
import Error from '../pages/Error'
import Login from '../pages/Login'

export const privateRoutes = [
  { path: '/error', component: Error },
  { path: '/', component: Posts, exact: true },
  { path: '/posts', component: Posts, exact: true },
  { path: '/posts/:id', component: SinglePost },
  { path: '/about', component: About }
]

export const publicRoutes = [{ path: '/login', component: Login }]
