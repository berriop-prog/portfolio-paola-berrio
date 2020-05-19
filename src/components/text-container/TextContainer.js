import React from 'react';
import './TextContainer.css';

const TextContainer = (props) => {
  return (
    <div className="text-container">
      <h1 className="title-container">{props.title}</h1>
      <p className="text-p">{props.paragraph}</p>      
    </div>
  );
};

export default TextContainer;
