import React from 'react'
import '../pages-styles/UserPage.css'
import kawaii from '../assets/kawaii.png';
import axios  from 'axios';

import { useState,useContext,useEffect } from 'react';
import NotesCard from '../components/NotesCard';
import WeatherCard from '../components/WeatherCard';
import UserCard from '../components/UserCard';
function UserPage() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c8a6970773284d74ac92a45aba4b2f57');
        console.log(response.data);
      } catch (error) {
        console.log("Some error occurred");
      }
    };
  
    fetchData(); 
  }, []);
  
  return (
    <div className='userpage'>
      <div className='main-content'>
      <div className='left-content'>
       
       
        <div className='left-content-top'>
          <div className='left-content-top-left'>
          <UserCard></UserCard>
        <WeatherCard></WeatherCard>
          </div>

        
        
           <NotesCard></NotesCard>

          
 
            
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


