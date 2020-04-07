import React from 'react';
import TextContainer from '../../components/text-container/TextContainer';

const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <TextContainer
        title="Descripción"
        p=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium."
      />
    </div>
  );
};

export default About;
