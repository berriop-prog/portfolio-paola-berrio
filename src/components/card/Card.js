import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">{props.text}</p>
        <a href={`https://berriop-prog.github.io/${props.projectName}`}>Ver más</a>
      </div>
      <div className="card-img" style={{backgroundImage: `url(${props.imgName})`}}></div>
    </div>
  );
};

export default Card;
