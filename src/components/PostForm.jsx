import React, { useState } from 'react'

import Button from './UI/Button/Button'
import Input from './UI/Input/Input'

const PostForm = ({ createPost, showError, isDisabled }) => {
  const [post, setPost] = useState({
    title: '',
    body: ''
  })

  const addNewPost = evt => {
    evt.preventDefault()
    const error = checkFormValidity()

    if (error) {
      showError(error)
      return
    }

    createPost({
      ...post,
      date: new Date(),
      id: Date.now()
    })
    setPost({ title: '', body: '' })
  }

  const checkFormValidity = () => {
    if (!post.title && !post.body) {
      return 'Заголовок и текст поста должны быть заполнены'
    }
    if (!post.title) {
      return 'Необходимо написать заголовок поста'
    }
    if (!post.body) {
      return 'Необходимо написать текст поста'
    }
    if (post.title.trim().length > 100) {
      return 'Заголовок поста не должен быть больше 100 символов'
    }
    if (post.body.trim().length < 10) {
      return 'Текст поста должен быть не меньше 10 символов'
    }
  }

  return (
    <>
      <h2>Создать новый пост</h2>
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
        <Button buttonType='primary' isSubmitter disabled={isDisabled} onClick={addNewPost}>
          Отправить
        </Button>
      </form>
    </>
  )
}

export default PostForm
