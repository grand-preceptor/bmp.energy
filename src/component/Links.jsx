import React from 'react';

import './links.scss';

import { ReactComponent as LinkedIn } from '../image/linkedin.svg';
import { ReactComponent as GitHub } from '../image/github.svg';

function Links() {
  return (
    <div className="links">
      <div className="links__link">
        <a href="https://www.linkedin.com/in/banjopower/" target="_blank" rel="noreferrer">
          <LinkedIn/>
        </a>
      </div>
      <div className="links__link">
        <a href="https://github.com/benj-power" target="_blank" rel="noreferrer">
          <GitHub/>
        </a>
      </div>
    </div>
  );
}

export default Links;
