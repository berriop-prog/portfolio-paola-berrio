import React from 'react';
import TextContainer from '../../components/text-container/TextContainer';
import Skills from '../../components/skills/Skills';
import { aboutData } from '../../projectsData';
import Banner from '../../components/banner/Banner';
import './About.css';
import Projects from '../../components/projects/Projects';

const About = () => {
  return (
    <div className="about-container">
      <Banner />
      {aboutData.map((item, index) => (
        <div className="about-info-block" key={index}>
          <TextContainer
            title={item.title}
            paragraph={item.paragraph}
            float={item.float}
          />
        </div>
      ))}
      <Skills title="Habilidades" />
      <Projects />
    </div>
  );
};

export default About;
