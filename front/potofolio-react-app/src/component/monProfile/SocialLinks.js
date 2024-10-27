import React from 'react';

const SocialLinks = ({ links }) => {
  return (
    <div className="d-flex justify-content-around">
      {links.map((link, index) => (
        <a key={index} href={link.socialUl} className="btn btn-dark">
          <i className={`iconify`} data-icon={link.socialIcon}></i> {link.socialName}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
