import React from 'react';
import './Contact.css';
import SocialMedia from '../../components/social-media/SocialMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  return (
    <div>      
      <SocialMedia
        text="berriop@gmail.com"
        title="Social media"        
      />
    </div>
  );
};

export default Contact;
