import React from 'react'
import '../pages-styles/UserPage.css'
import kawaii from '../assets/kawaii.png';
function UserPage() {
  return (
    <div className='userpage'>
      <div className='main-content'>
      <div className='left-content'>
       
       
        <div className='left-content-top'>
          <div className='left-content-top-left'>
          <div className='user-card'>
          <img src={kawaii}></img>
          <h2>Risu</h2>
          <h2>risu.chan.kawaii@gmail.com</h2>
          <h1>risu-chu</h1>
        </div>
        <div className='weather-card'>
          <div className='weather-card-top'>
            <p>2-20-2023</p>
            <p>07:35 PM</p>
          </div>
          
        </div>
          </div>

        
        
          <input className='notes-card'></input>
          
 
            
          </div>
        <div className='timer-card'></div>
      </div>
      <div className='right-content'>
        <div className='news-card'></div>
      </div>
      </div>
      <button className='browse-button'>browse</button>
      
    </div>
  )
}

export default UserPage
