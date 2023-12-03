import React from 'react'
import '../component-styles/Category.css'
function Category({title,image,bg, onClick}) {
  return (
    <div className='cat'>
        <div className='content' style={{backgroundColor: bg}} onClick={onClick}>
           <h1>{title}</h1>
           <img src={image}></img>
        </div>
    </div>
  )
}

export default Category;