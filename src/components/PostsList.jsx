import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import PostItem from './PostItem'

const PostsList = ({ posts, startNumber, removePost }) => {
  return posts.length ? (
    <TransitionGroup>
      {posts.map((post, i) => (
        <CSSTransition
          key={post.id}
          timeout={{
            enter: 1000,
            exit: 400
          }}
          classNames='post'
        >
          <PostItem post={post} number={startNumber + i} removePost={removePost} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  ) : (
    <p>Посты не найдены</p>
  )
}

export default PostsList
