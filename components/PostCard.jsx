import React from 'react'

const PostCard = ({ post }) => {
  return (
    <div>
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
    </div>
  )
}

export default PostCard