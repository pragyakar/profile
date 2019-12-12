import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip'


const Icon = ({icon, link, name}) => (
  <div className="icon-box">
    <a 
      href={link} 
      target={link !== '' ? "_blank" : ''}
      className="fa-icon"
      data-tip={name}
    >
      <ReactTooltip place="bottom" effect="solid"/>
      
      <FontAwesomeIcon icon={icon} className={'font-icon'} />
    </a>
  </div>
);

export default Icon