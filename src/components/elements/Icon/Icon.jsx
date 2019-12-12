import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({icon}) => (
  <div className="icon-box">
    <FontAwesomeIcon icon={icon} className={'font-icon'} />
  </div>
);

export default Icon