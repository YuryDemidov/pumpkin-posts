import React, { useState } from 'react'

import PostsList from './components/PostsList'
import PostForm from './components/PostForm'
import './styles/App.scss'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', text: 'Javascript - язык программирования'},
    {id: 12, title: 'PHP', text: 'PHP - язык программирования'},
    {id: 33, title: 'Python', text: 'Python - язык программирования'},
    {id: 124, title: 'Хинди', text: 'Хинди - язык для общения'}
  ])

  return (
    <div className='App'>
      <PostForm posts={posts} setPosts={setPosts} />
      <PostsList posts={posts} />
    </div>
  )
}

export default App
