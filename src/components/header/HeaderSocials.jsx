import React from 'react';
import { headerSocials } from '../utils/utils';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        {headerSocials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="logo__footer"
          >
            {social.icon}
          </a>
        ))}
    </div>
  )
}

export default HeaderSocials