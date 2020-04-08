import React from 'react';
import Card from '../../components/card/Card';
import { projectsData } from '../../projectsData';
import './Projects.css';

const Projects = () => {
  return (
    <div className='projects-wrapper'>
      {projectsData.map((projectData, index) => <Card key={index} {...projectData} />)}
    </div>
  );
};

export default Projects;
