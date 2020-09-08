import React from 'react';
import { FaHeart } from 'react-icons/fa';
import moment from 'moment';

import './PostItem.scss'

/**
 * props
 * - idx
 * - title
 * - createdAt
 * - category
 * - likeCount
 */
const PostItem = ({ post, setPostIdx }) => {
  return (
    <div className='postItem' onClick={(e) => {
      setPostIdx(post.idx);
    }}>
      <div className='heart'>
        <FaHeart size='12px' color='#2026A2' />
        {post.likeCount}
      </div>
      <div className='content'>
        <h3>{post.title}</h3>
        <div className='detail'>
          <span>
            {post.category}학년
          </span>
          <span>
            {moment(post.createdAt).format('YYYY-MM-DD')}
          </span>
        </div>
      </div>
    </div>
  )
}

export default PostItem;
