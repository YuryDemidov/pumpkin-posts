import React from 'react'

const PostItem = ({ post, number }) => {
  return (
    <div className='post'>
      <div className='post__content'>
        <h2 className='post__title'>{number}. {post.title}</h2>
        <p className='post__text'>{post.text}</p>
      </div>
      <div className='post__buttons'>
        <button className='post__remove-button' type='button'>Удалить</button>
      </div>
    </div>
  )
}

export default PostItem
