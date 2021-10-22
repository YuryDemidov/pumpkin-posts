import React, { useEffect, useState } from 'react'

import PageTitle from './components/UI/Title/PageTitle'
import PostsList from './components/PostsList'
import PostForm from './components/PostForm'
import Filters from './components/Filters'
import Modal from './components/UI/Modal/Modal'
import { useFilteredPosts } from './hooks/usePosts'
import PostService from './api/PostService'
import './styles/App.scss'
import Loader from './components/UI/Loader/Loader'

const SORTING_OPTIONS = [
  { value: 'new', name: 'Сначала новые' },
  { value: 'old', name: 'Сначала старые' },
  { value: 'random', name: 'Случайная' },
  { value: 'alphabetical', name: 'По алфавиту' }
]

const INITIAL_POSTS = [
  // { id: 1595190784266, title: 'Python', body: 'Python — язык программирования', date: '2020-07-19 23:33:04' },
  // { id: 1548029591397, title: 'Хинди', body: 'Хинди — язык Индии', date: '2019-01-21 03:13:11' },
  // { id: 1541136835390, title: 'Банту', body: 'Банту — язык Зимбабве', date: '2018-11-02 08:33:55' },
  // { id: 1488382990837, title: 'PHP', body: 'PHP — язык программирования', date: '2017-03-01 18:43:10' },
  // { id: 1447237424948, title: 'Javascript', body: 'Javascript — язык программирования', date: '2015-11-11 13:23:44' }
]

function App() {
  const [posts, setPosts] = useState(INITIAL_POSTS)
  const [filter, setFilter] = useState({ sorting: SORTING_OPTIONS[0], term: '' })
  const [modalContent, setModalContent] = useState('')
  const [isShowLoader, setIsShowLoader] = useState(false)
  const filteredPosts = useFilteredPosts(posts, filter.sorting, filter.term)

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = newPost => {
    setPosts([newPost, ...posts])
  }
  const removePost = id => {
    setPosts(posts.filter(post => id !== post.id))
  }

  const fetchPosts = async () => {
    setIsShowLoader(true)
    try {
      const posts = await PostService.getAll()
      setPosts(posts)
    } catch (error) {
      setModalContent(
        <>
          Ошибка!
          <br />
          {error.message}
        </>
      )
    } finally {
      setIsShowLoader(false)
    }
  }

  return (
    <div className='App'>
      <PostForm createPost={createPost} showError={setModalContent} isDisabled={isShowLoader} />
      <PageTitle>Список постов</PageTitle>
      {isShowLoader ? (
        <Loader />
      ) : (
        <>
          <Filters filter={filter} setFilter={setFilter} sortingOptions={SORTING_OPTIONS} />
          <PostsList posts={filteredPosts} removePost={removePost} />
        </>
      )}
      <Modal content={modalContent} setContent={setModalContent} />
    </div>
  )
}

export default App
