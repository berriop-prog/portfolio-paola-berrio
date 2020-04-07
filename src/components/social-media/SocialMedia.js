import React from 'react';
import './SocialMedia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const SocialMedia = (props) => {
  return (
    <div className="social-container">
    <p className="social-text">{props.text}</p>
      <h2 className="social-title">{props.title}</h2>
      
      <a href="berriop@gmail.com" className="social">
        <FontAwesomeIcon icon={faGoogle}  />
      </a>
      <a href="https://github.com/berriop-prog" className="social">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/paola-andrea-berrío-31a3521a2"
        className="social"
      >
        <FontAwesomeIcon icon={faLinkedin}  />
      </a>
    </div>
  );
};

export default SocialMedia;
