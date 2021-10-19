import React, { useState } from 'react'

import Button from './UI/Button/Button'
import Input from './UI/Input/Input'

const PostForm = ({ createPost }) => {
  const [post, setPost] = useState({
    title: '',
    body: ''
  })

  const addNewPost = evt => {
    evt.preventDefault()
    if (!post.title || !post.body) {
      return
    }

    createPost({
      ...post,
      date: new Date(),
      id: Date.now()
    })
    setPost({ title: '', body: '' })
  }

  return (
    <form className='post__form'>
      <Input
        className='post__input'
        type='text'
        value={post.title}
        placeholder='Заголовок'
        aria-label='Заголовок вашего поста'
        onChange={evt => setPost({ ...post, title: evt.target.value })}
      />
      <Input
        className='post__input'
        type='text'
        value={post.body}
        placeholder='Текст'
        aria-label='Текст вашего поста'
        onChange={evt => setPost({ ...post, body: evt.target.value })}
      />
      <Button buttonType='success' isSubmitter onClick={addNewPost}>
        Создать пост
      </Button>
    </form>
  )
}

export default PostForm
