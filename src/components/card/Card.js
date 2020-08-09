import React from 'react';
import ImageContainer from '../image-container/ImageContainer';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">{props.text}</p>
        <a href={`https://${props.projectName}.netlify.app`} target='_blank' rel="noopener noreferrer">Ver más</a>
      </div>
      <ImageContainer imgName={props.imgName} />
  </div>
  );
};

export default Card;
