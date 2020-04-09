import React from 'react';
import './SocialMedia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const SocialMedia = (props) => {
  return (
    <div className="social-container">
      <p className="social-text">{props.text}</p>
      <div><h2 className="social-title">{props.title}</h2></div>
      <div >     
        <span className="social-icon"><a href="https://github.com/berriop-prog" >
          <FontAwesomeIcon icon={faGithub} />
        </a></span>
        <span className="social-icon"><a
          href="https://www.linkedin.com/in/paola-andrea-berrío-31a3521a2"       
        >
          <FontAwesomeIcon icon={faLinkedin}  />
        </a></span>
      </div>
    </div>
  );
};

export default SocialMedia;
