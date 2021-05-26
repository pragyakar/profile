import React, { useState, useEffect } from 'react';
import Links from './Links';

const Landing = () => {

  const [loadingState, setLoadingState] = useState(false);
  
  useEffect(() => ( 
    setLoadingState(true)
  ), []);

  return (
    <React.Fragment>
      <div className="landing">
        <div className={ `content-box ${ loadingState ? 'visible' : ''}`}>
          <div className="title-box">
            <span>pragyakar</span>
          </div>
          <Links />
        </div>
      </div> 
    </React.Fragment>
  )
}

export default Landing;