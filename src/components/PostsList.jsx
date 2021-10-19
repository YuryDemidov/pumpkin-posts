import React from 'react'

import PostItem from './PostItem'

const PostsList = ({ posts, removePost }) => {
  return (
    <>
      {posts.length ? (
        posts.map((post, i) => <PostItem post={post} number={i + 1} removePost={removePost} key={post.id} />)
      ) : (
        <p>Посты не найдены</p>
      )}
    </>
  )
}

export default PostsList
