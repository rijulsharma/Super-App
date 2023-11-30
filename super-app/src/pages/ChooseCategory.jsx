import React from 'react'
import Category from '../components/Category'
import action from '../assets/action.png'
import romance from '../assets/romance.png'
import drama from '../assets/drama.png'
import thriller from '../assets/Thriller.png'
import western from '../assets/western.png'
import horror from '../assets/horror.png'
import fant from '../assets/fantasy.png'
import music from '../assets/music.png'
import fict from '../assets/fiction.png'
import '../pages-styles/ChooseCategory.css'
function ChooseCategory() {
  return (
    <div>
        <div className='left-content'>
          <h1> SUPER APP</h1>
          <h1>Choose your entertainment category</h1>
          
        </div>
        <div className='right-content1'>
          <div className='row'>
        <Category bg={'#FF5209'} title={'Action'} image={action} ></Category>
        <Category bg={'#148A08'} title={'Romance'} image={romance} ></Category>
        <Category bg={'#D7A4FF'} title={'Drama'} image={drama} ></Category>
        </div>

        <div className='row'>
        <Category bg={'#84C2FF'} title={'Thriller'} image={thriller} ></Category>
        <Category bg={'#902500'} title={'Western'} image={western} ></Category>
        <Category bg={'#7358FF'} title={'Horror'} image={horror} ></Category>
        </div>

        <div className='row'>
        <Category bg={'#FF4ADE'} title={'Fantasy'} image={fant} ></Category>
        <Category bg={'#E61E32'} title={'Music'} image={music} ></Category>
        <Category bg={'#6CD061'} title={'Fiction'} image={fict} ></Category>
        </div>
        </div>
        
    </div>
  )
}

export default ChooseCategory

