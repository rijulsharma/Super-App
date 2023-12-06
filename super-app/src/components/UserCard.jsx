import React from 'react'
import '../component-styles/Cards.css'
import kawaii from '../assets/kawaii.png'
function UserCard() {
  return (
    <div className='user-card'>
         <img src={kawaii}></img>
          <h2>Risu</h2>
          <h2>risu.chan.kawaii@gmail.com</h2>
          <h1>risu-chu</h1>
    </div>
  )
}

export default UserCard