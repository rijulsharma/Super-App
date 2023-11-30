import React from 'react'
import '../component-styles/Category.css'
function Category({title,image,bg}) {
  return (
    <div>
        <div className='content' style={{backgroundColor: bg}}>
           <h1>{title}</h1>
           <img src={image}></img>
        </div>
    </div>
  )
}

export default Category;