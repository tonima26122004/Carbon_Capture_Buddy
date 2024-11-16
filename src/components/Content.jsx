import React from 'react'
import './Content.css';
import Button from './Button';

const Content = () => {
  return (
    <div>
    <div className="content">
        <div className="text">
        <img className='leaf-1' src="/images/leaf.svg" alt="" />
            <p className='p_text'>
              <a>Measure </a> 
              Your Impact,
              <br />
              <p className="spaceing">
                <a>Take </a> 
                 Action,<br /> 
                and Help Create
                <br />
              </p> 
              a <a className='green'>Greener Planet!</a>
              <img className='leaf-2' src="/images/leaf.svg" alt="" />
              </p>


         <Button/>
        </div>
        <div>
        <img className='content_img' src="/images/Group 4.svg" alt="" />
        </div>
        
    </div>
    
    </div>
  )
}

export default Content
