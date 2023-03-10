import React from 'react'
import '../css/Middle.css'
import Post from './Post'
import Stories from './Stories'

const Middle = () => {
  return (
    <div className="Middle">
    <Stories/>
    <div className="post__center">
    <Post/>
    </div>
    </div>
  )
}

export default Middle