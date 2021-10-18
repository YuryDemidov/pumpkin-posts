import React from 'react'

import Button from './UI/Button/Button'

const PostItem = ({ post, number, removePost }) => {
  const postDate = new Date(post.date)

  return (
    <article className='post'>
      <div className='post__content'>
        <h2 className='post__title'>
          {number}. {post.title}
        </h2>
        <p className='post__text'>{post.text}</p>
        <p className='post__date'>
          {postDate.toLocaleTimeString().slice(0, 5)} {postDate.toLocaleDateString()}
        </p>
      </div>
      <div className='post__buttons'>
        <Button type='button' buttonType='danger' onClick={() => removePost(post.id)}>
          Удалить
        </Button>
      </div>
    </article>
  )
}

export default PostItem
