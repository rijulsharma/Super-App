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
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// ... (import statements and other code)

function ChooseCategory() {
  const [selectedCategories, setSelectedCategories] = useState(
    JSON.parse(localStorage.getItem('selectedCategories')) || []
  );
  const[error,setError] = useState('');
  const navigate = useNavigate();
  var choiceCount = 0;

  const handleCategoryClick = (categoryTitle) => {
    
    if (!selectedCategories.includes(categoryTitle)) {
      setSelectedCategories((prevCategories) => [...prevCategories, categoryTitle]);
    } else {
      console.log("Category already selected!");
    }
    choiceCount ++;
    console.log(choiceCount)
    
  };
  const removeCategory = (categoryTitle) => {
    setSelectedCategories((prevCategories) => prevCategories.filter((category) => category !== categoryTitle));
    choiceCount--;
  };
  useEffect(() => {
    localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
    if (selectedCategories.length >= 3) {
      setError('');
      
    }
  }, [selectedCategories]);

  const handleNextPage = () => {
    if (selectedCategories.length >= 3) {
      navigate('/userPage');
      
    } else {
      setError('Minimum 3 categories required.');
      console.log('Minimum 3 categories required.');
    }
  };


  return (
    <div className='yo'>
      <div className='left-content1'>
        <h1 className='header'> SUPER APP</h1>
        <br></br>
        <h1>Choose your entertainment category</h1>
        <div className='choice-box'>
          {selectedCategories.map((category, index) => (
            <div key={index} className='choice'>
              <p>{category}</p>
              <p className='cross' onClick={() => removeCategory(category)}>X</p>
            </div>
          ))}
        </div>
        <div><p className='error-text'>{error}</p></div>
      </div>
      <div className='right-content1'>
        <div className='row'>
          <Category bg={'#FF5209'} title={'Action'} image={action} onClick={() => handleCategoryClick('Action')} ></Category>
          <Category bg={'#148A08'} title={'Romance'} image={romance} onClick={() => handleCategoryClick('Romance')}></Category>
          <Category bg={'#D7A4FF'} title={'Drama'} image={drama} onClick={() => handleCategoryClick('Drama')}></Category>
        </div>

        <div className='row'>
          <Category bg={'#84C2FF'} title={'Thriller'} image={thriller} onClick={() => handleCategoryClick('Thriller')} ></Category>
          <Category bg={'#902500'} title={'Western'} image={western} onClick={() => handleCategoryClick('Western')}></Category>
          <Category bg={'#7358FF'} title={'Horror'} image={horror} onClick={() => handleCategoryClick('Horror')}></Category>
        </div>

        <div className='row'>
          <Category bg={'#FF4ADE'} title={'Fantasy'} image={fant} onClick={() => handleCategoryClick('Fantasy')}></Category>
          <Category bg={'#E61E32'} title={'Music'} image={music} onClick={() => handleCategoryClick('Music')} ></Category>
          <Category bg={'#6CD061'} title={'Fiction'} image={fict} onClick={() => handleCategoryClick('Fiction')}></Category>
        </div>
        <div className='row'>
          <button className='next-button' onClick={handleNextPage}>Next Page</button>
        </div>
      </div>
    </div>
  )
}

export default ChooseCategory;
