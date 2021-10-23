import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import cn from 'classnames'

import { useFetch } from '../hooks/useFetch'
import PostService from '../api/PostService'
import Loader from '../components/UI/Loader/Loader'
import PostComments from '../components/PostComments'
import classes from '../components/UI/Title/PageTitle.module.scss'
import outputPostDate from '../utils/outputPostDate'

const SinglePost = () => {
  const { id } = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchPostById, isLoading] = useFetch(async id => {
    const response = await PostService.getSingle(id)
    setPost(response.data)
  }, console.log)
  const [fetchComments, isCommentsLoading] = useFetch(async id => {
    const comments = await PostService.getPostComments(id)
    setComments(comments)
  }, console.log)

  useEffect(() => {
    fetchPostById(id)
    fetchComments(id)
  }, [id])

  return (
    <main className='page single-post-page'>
      {isLoading || isCommentsLoading ? (
        <Loader />
      ) : (
        <>
          <div className='single-post'>
            <div className='single-post__heading'>
              <h1 className={cn(classes.title, 'single-post__title')}>{post.title}</h1>
              {post.date && (
                <p className='single-post__date'>
                  Написан&nbsp;в&nbsp;<time>{outputPostDate(new Date(post.date))}</time>
                </p>
              )}
            </div>
            <p className='single-post__text'>{post.body}</p>
          </div>
          <PostComments comments={comments} />
        </>
      )}
    </main>
  )
}

export default SinglePost
