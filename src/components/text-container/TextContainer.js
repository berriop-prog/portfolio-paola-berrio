import React from 'react';
import './TextContainer.css';

const TextContainer = (props) => {
  return (
    <div className="text-container">
      <h1 className="text-title">{props.title}</h1>
      <p className="text-p">{props.p}</p>
    </div>
  );
};

export default TextContainer;
