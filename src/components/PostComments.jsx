import React from 'react'

import capitalize from '../utils/capitalize'

const PostComments = ({ comments }) => {
  return (
    <>
      <h2>Комментарии</h2>
      <ul className='post__comments'>
        {comments.map(comment => (
          <li key={comment.id}>
            <article>
              <figure className='comment'>
                <blockquote className='comment__text'>{capitalize(comment.body)}</blockquote>
                <figcaption>
                  <h3 className='comment__author'>{comment.name.split(' ').sort((a, b) => b.length - a.length)[0]}</h3>
                </figcaption>
              </figure>
            </article>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PostComments
