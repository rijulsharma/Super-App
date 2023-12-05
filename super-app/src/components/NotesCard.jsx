import React from 'react'
import '../component-styles/Cards.css'
function NotesCard() {
  return (
    <div className='notes-card'>
         <h2>All Notes</h2>
  <textarea placeholder="Write your notes here..."></textarea>
    </div>
  )
}

export default NotesCard