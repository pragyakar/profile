import React from 'react';
import Icon from '../../elements/Icon';

import * as fa from '@fortawesome/free-solid-svg-icons'
import * as fab from '@fortawesome/free-brands-svg-icons';

const Links = () => (
  <div className="icons-box">
    <Icon name={'GitHub'} link={'https://github.com/pragyakar'} icon={fab.faGithub} />
    <Icon name={'Read my Blog'} link={'https://medium.com/@pragyakar'} icon={fab.faMedium} />
    <Icon name={'LinkedIn'} link={'https://www.linkedin.com/in/pragyakar/'} icon={fab.faLinkedin} />
    <Icon name={'Write to me'} link={'mailto:pragyakarj@gmail.com'} icon={fa.faMailBulk} />
    <Icon name={'Download CV'} link={''} icon={fa.faFile} />
  </div>
);

export default Links;