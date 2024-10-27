import React from 'react';

const UserLinks = ({ links }) => {
  return (
    <div className="list-group">
      {links.map((link, index) => (
        <a key={index} href={link.link} className="list-group-item list-group-item-action">
          <i className={`iconify`} data-icon={link.icon}></i> {link.title}
        </a>
      ))}
    </div>
  );
};

export default UserLinks;