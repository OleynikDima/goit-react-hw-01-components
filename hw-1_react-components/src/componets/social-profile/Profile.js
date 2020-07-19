import React from 'react'
import PropTypes from 'prop-types';


//Create Temp 
function Profiler({user}){
    return (
        <div class="profile">
        <div class="description">
          <img
            src={user.avatar}
            alt={user.name}
            class="avatar"
          />
          <p class="name">{user.name}</p>
          <p class="tag">@{user.tag}</p>
          <p class="location">{user.location}</p>
        </div>
      
        <ul class="stats">
          <li>
            <span class="label">Followers: </span>
            <span class="quantity">{user.stats.followers}</span>
          </li>
          <li>
            <span class="label">Views: </span>
            <span class="quantity">{user.stats.views}</span>
          </li>
          <li>
            <span class="label">Likes: </span>
            <span class="quantity">{user.stats.likes}</span>
          </li>
        </ul>
      </div>
    );
}

Profiler.defaultProps ={
        avatar: 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder'
}


Profiler.propTypes ={
  // to do prop type corect 
  user:PropTypes.node.isRequired={
    avatar:PropTypes.string,
    name:PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    stats:{
        followers:PropTypes.number.isRequired,
        views:PropTypes.number.isRequired,
        likes:PropTypes.number.isRequired,
    }   
  }
}

export default Profiler;