import React from 'react';
import PropTypes from 'prop-types'
import styles from './FriendList.module.css'


function FriendList({friends}){
    // style online user
    const onLine = (onLine) => 
        onLine ? styles.statusOnLine :styles.statusOffLine

    return (
     <ul className={styles['friend-list']}>
         {friends.map(friend => {
             return  <li className={styles.item} key={friend.id}>
                     <span className={onLine(friend.isOnline)}></span>
                     <img className={styles.avatar} src={friend.avatar} alt={friend.name} width="48" />
                     <p className={styles.name}>{friend.name}</p>
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
        id:PropTypes.string,
        isOnline:PropTypes.bool.isRequired,
        avatar:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired, 
    })
}

export default FriendList;