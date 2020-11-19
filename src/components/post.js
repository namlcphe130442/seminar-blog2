import { Link } from "gatsby"
import React from "react"
import "./post.css"
import moment from 'moment'

const Post = ({ title, time, image, content ,slug}) => {
  return (
    <article>
      <div className="title">
        <div>
          <img src={image} alt={title} />
        </div>
        <div className="title_info">
          <h2>{title}</h2>
          <time>{moment(time).format('MMMM Do YYYY')}</time>
        </div>
      </div>
      <div className="content">{content}</div>
      <div className="read-more">
        <button>
        <Link to ={slug} className='link-post'>Keep Reading &rarr;</Link>
        </button>
      
      </div>
    </article>
  )
}

export default Post
