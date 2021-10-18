import React, { useState } from 'react'

import PageTitle from './components/UI/Title/PageTitle'
import PostsList from './components/PostsList'
import PostForm from './components/PostForm'
import './styles/App.scss'
import Sorting from './components/Sorting'

function App() {
  const [posts, setPosts] = useState([
    { id: 1595190784266, title: 'Хинди', text: 'Хинди — язык Индии', date: '2020-07-19 23:33:04' },
    { id: 1548029591397, title: 'Python', text: 'Python — язык программирования', date: '2019-01-21 03:13:11' },
    { id: 1541136835390, title: 'Банту', text: 'Банту — язык Зимбабве', date: '2018-11-02 08:33:55' },
    { id: 1488382990837, title: 'PHP', text: 'PHP — язык программирования', date: '2017-03-01 18:43:10' },
    { id: 1447237424948, title: 'Javascript', text: 'Javascript — язык программирования', date: '2015-11-11 13:23:44' }
  ])

  const createPost = newPost => {
    setPosts([newPost, ...posts])
  }
  const removePost = id => {
    setPosts(posts.filter(post => id !== post.id))
  }
  const sortPosts = sorting => {
    switch (sorting) {
      case 'new':
      default:
        setPosts([...posts].sort((a, b) => (a.id > b.id ? -1 : 1)))
        break
      case 'old':
        setPosts([...posts].sort((a, b) => (a.id < b.id ? -1 : 1)))
        break
      case 'random':
        setPosts([...posts].sort(() => Math.random() - 0.5))
        break
      case 'alphabetical':
        setPosts([...posts].sort((a, b) => (a.title < b.title ? -1 : 1)))
        break
    }
  }

  return (
    <div className='App'>
      <PostForm createPost={createPost} />
      <PageTitle>Список постов</PageTitle>
      <Sorting onChange={sortPosts} />
      <PostsList posts={posts} removePost={removePost} onSortingChange={sortPosts} />
    </div>
  )
}

export default App
