import React from 'react'

import Button from './UI/Button/Button';

const PostItem = ({ post, number }) => {
  return (
    <div className='post'>
      <div className='post__content'>
        <h2 className='post__title'>{number}. {post.title}</h2>
        <p className='post__text'>{post.text}</p>
      </div>
      <div className='post__buttons'>
        <Button type='button' buttonType='danger'>Удалить</Button>
      </div>
    </div>
  )
}

export default PostItem
