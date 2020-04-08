import React from 'react';
import TextContainer from '../../components/text-container/TextContainer';
import Skills from '../../components/skills/Skills';
import ImageContainer from '../../components/image-container/ImageContainer';
import { aboutData } from '../../projectsData';
import './About.css';

const About = () => {
  return (
    <div className='about-container'>
      {
        aboutData.map((item, index) => (
          <div className='about-info-block' key={index}>
            <TextContainer title={item.title}
              paragraph={item.paragraph}
              float={item.float} />
            <ImageContainer imgName={item.imgName} float={item.float} /> 
          </div>
        ))
      }     
      <Skills title='Habilidades' />

    </div>
  );
};

export default About;
