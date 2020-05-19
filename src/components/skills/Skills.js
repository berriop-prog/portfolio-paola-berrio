import React from 'react';
import { skillsList } from '../../projectsData';
import './Skills.css';

const Skills = (props) => {
  return (
    <div className='skills-container'>
      <h1 className='skills-title'>{props.title}</h1>
      <ul className='horizontal'>
        {skillsList.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Skills;
