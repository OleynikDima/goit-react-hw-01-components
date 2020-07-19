import React from 'react';
import PropTypes from 'prop-types'


function FriendList({friends}){
    return (
     <ul class="friend-list">
         {friends.map(friend => {
             return  <li class="item" key={friend.id}>
                     <span class="status">{friend.isOnline}</span>
                     <img class="avatar" src={friend.avatar} alt={friend.name} width="48" />
                     <p class="name">{friend.name}</p>
                     </li> 
                                }
                     )
         }
    </ul>
    )
}

FriendList.defaultProps ={
    avatar: 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder'
}


FriendList.propTypes ={
    id:PropTypes.number.isRequired,
    isOnline:PropTypes.string.isRequired,
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired, 
}

export default FriendList;