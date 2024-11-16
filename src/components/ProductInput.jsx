import React from 'react';
import './ProductInput.css';

function ProductInput() {
  // Handler functions for the left and right icons
  const handleLeftIconClick = () => {
    alert('Left icon clicked!');
    // Add your logic for the left icon
  };

  const handleRightIconClick = () => {
    alert('Right icon clicked!');
    // Add your logic for the right icon
  };

  return (
    <div className="app-container">
      <div className="title-container">
        <h2 className="main-title"></h2>
      </div>
      <div className="page-container">
        <div className="input-container">
          <div className="product-input-container">
            {/* Input field */}
            <input
              className="product-input"
              type="text"
              placeholder="Enter product name"
            />
            {/* Icon Container for both icons */}
            <div className="icon-container">
              {/* Left Icon */}
              <img 
                src="/images/add_photo_alternate_rounded.svg" 
                alt="Add Photo" 
                className="icon-left"
                onClick={handleLeftIconClick} 
              />
              {/* Right Icon */}
              <img 
                src="/images/352094_send_icon.svg" 
                alt="Send Icon" 
                className="icon-right"
                onClick={handleRightIconClick} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInput;
