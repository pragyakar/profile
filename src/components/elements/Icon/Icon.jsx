import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({icon, link, name}) => (
  <div className="icon-box">
    <a 
      href={link} 
      target={link !== '' ? "_blank" : ''}
      className="fa-icon"
    >
      <FontAwesomeIcon icon={icon} className={'font-icon'} />
    </a>
  </div>
);

export default Icon