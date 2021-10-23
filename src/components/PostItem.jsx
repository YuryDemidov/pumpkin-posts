import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import Button from './UI/Button/Button'
import classes from './UI/Button/Button.module.scss'
import outputPostDate from '../utils/outputPostDate'

const PostItem = ({ post, number, removePost }) => {
  return (
    <article className='post'>
      <div className='post__content'>
        <h2 className='post__title'>
          {number}. {post.title}
        </h2>
        <p className='post__text'>{post.body}</p>
        <time className='post__date'>{outputPostDate(new Date(post.date))}</time>
      </div>
      <div className='post__buttons'>
        <NavLink className={cn('post__button', classes.button, classes.primary)} to={`/posts/${post.initialId}`}>
          Открыть
        </NavLink>
        <Button className='post__button' type='button' buttonType='danger' onClick={() => removePost(post.id)}>
          Удалить
        </Button>
      </div>
    </article>
  )
}

export default PostItem
