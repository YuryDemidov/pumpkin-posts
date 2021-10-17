import React from 'react'

import PostItem from './PostItem';

const PostsList = ({ posts }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Список постов</h1>
      {posts.map((post, i) => <PostItem post={post} number={i + 1} key={post.id} />)}
    </div>
  )
}

export default PostsList
