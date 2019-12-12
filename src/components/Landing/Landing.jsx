import React from 'react';
import Icon from '../elements/Icon/Icon';
import { 
  faSnowflake, 
  faCoffee, 
  faCocktail, 
  faMicrochip, 
  faFile 
} from '@fortawesome/free-solid-svg-icons'

const Landing = () => (
  <div className="landing">
    <div className="content-box">
      <div className="title-box">
        <span>pragyakar</span>
      </div>
      <div className="icons-box">
        <Icon icon={faSnowflake} />
        <Icon icon={faCoffee} />
        <Icon icon={faCocktail} />
        <Icon icon={faMicrochip} />
        <Icon icon={faFile} />
      </div>
    </div>
  </div>
)

export default Landing;