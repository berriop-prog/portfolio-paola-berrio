import React from 'react';
import Card from '../../components/card/Card';
import { projectsData } from '../../projectsData';
import './Projects.css';

const Projects = () => {
  return (
    <div>
    <h2 className="projects-title">Proyectos</h2>
    <div className='projects-wrapper'>    
      {projectsData.map((projectData, index) => <Card key={index} {...projectData} />)}
    </div>
    </div>
  );
};

export default Projects;
