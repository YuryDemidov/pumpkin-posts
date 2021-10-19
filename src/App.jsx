import React, { useMemo, useState } from 'react'

import PageTitle from './components/UI/Title/PageTitle'
import PostsList from './components/PostsList'
import PostForm from './components/PostForm'
import Filters from './components/Filters'
import './styles/App.scss'

const SORTING_OPTIONS = [
  { value: 'new', name: 'Сначала новые' },
  { value: 'old', name: 'Сначала старые' },
  { value: 'random', name: 'Случайная' },
  { value: 'alphabetical', name: 'По алфавиту' }
]

const INITIAL_POSTS = [
  { id: 1595190784266, title: 'Python', body: 'Python — язык программирования', date: '2020-07-19 23:33:04' },
  { id: 1548029591397, title: 'Хинди', body: 'Хинди — язык Индии', date: '2019-01-21 03:13:11' },
  { id: 1541136835390, title: 'Банту', body: 'Банту — язык Зимбабве', date: '2018-11-02 08:33:55' },
  { id: 1488382990837, title: 'PHP', body: 'PHP — язык программирования', date: '2017-03-01 18:43:10' },
  { id: 1447237424948, title: 'Javascript', body: 'Javascript — язык программирования', date: '2015-11-11 13:23:44' }
]

function App() {
  const [posts, setPosts] = useState(INITIAL_POSTS)
  const [filter, setFilter] = useState({ sorting: SORTING_OPTIONS[0], term: '' })

  const createPost = newPost => {
    setPosts([newPost, ...posts])
  }
  const removePost = id => {
    setPosts(posts.filter(post => id !== post.id))
  }

  const sortedPosts = useMemo(() => {
    let compareFn
    switch (filter.sorting.value) {
      case 'new':
      default:
        compareFn = (a, b) => (a.id > b.id ? -1 : 1)
        break
      case 'old':
        compareFn = (a, b) => (a.id < b.id ? -1 : 1)
        break
      case 'random':
        compareFn = () => Math.random() - 0.5
        break
      case 'alphabetical':
        compareFn = (a, b) => (a.title < b.title ? -1 : 1)
        break
    }
    return [...posts].sort(compareFn)
  }, [filter.sorting, posts])

  const filteredPosts = useMemo(() => {
    if (!filter.term) {
      return sortedPosts
    }
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.term.toLowerCase().trim()))
  }, [filter.term, sortedPosts])

  return (
    <div className='App'>
      <PostForm createPost={createPost} />
      <PageTitle>Список постов</PageTitle>
      <Filters filter={filter} setFilter={setFilter} sortingOptions={SORTING_OPTIONS} />
      <PostsList posts={filteredPosts} removePost={removePost} />
    </div>
  )
}

export default App
