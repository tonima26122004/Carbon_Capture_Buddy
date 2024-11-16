import React from 'react';
import { useNavigate } from 'react-router-dom';
import Page_1 from '../Pages/Page_1';
import Page_2 from '../Pages/page_2';
import './Button.css';



const Button = () => {
 
  const navigate = useNavigate();

  const goTopage_2 = () => {
    navigate('/page_2');
  };
  
  return (
    <div>

      <button onClick={goTopage_2} className='track' >
          <div className='track_content'>
          Track Now
          <img src="/images/Arrow 1.svg" alt="" />
          </div>
      </button>

    </div>
  )
}

export default Button
