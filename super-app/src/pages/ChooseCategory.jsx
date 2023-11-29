import React from 'react'
import Category from '../components/Category'
import action from '../assets/action.png'

function ChooseCategory() {
  return (
    <div>
        <div className='left'></div>
        <div className='right'>
        <Category bg={'#FF5209'} title={'Action'} image={action} ></Category>
        </div>
        
    </div>
  )
}

export default ChooseCategory