import React from 'react';
import PropTypes from 'prop-types'


function FriendList({friends}){
    return (
     <ul className="friend-list">
         {friends.map(friend => {
             return  <li className="item" key={friend.id}>
                     <span className="status">{friend.isOnline}</span>
                     <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
                     <p className="name">{friend.name}</p>
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
    friend:PropTypes.exact({
        id:PropTypes.string.isRequired,
        isOnline:PropTypes.string.isRequired,
        avatar:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired, 
    })
}

export default FriendList;