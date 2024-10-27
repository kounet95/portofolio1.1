import React from 'react';
import { socialLinks } from '../../data/data';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaWhatsapp, FaFacebook, FaYoutube } from 'react-icons/fa';
import './Footer.css';
const iconMap = {
    FaLinkedin: FaLinkedin,
    FaGithub: FaGithub,
    FaInstagram: FaInstagram,
    FaTwitter: FaTwitter,
    FaWhatsapp: FaWhatsapp,
    FaFacebook:FaFacebook,
    FaYoutube:FaYoutube,
  };
  
  const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <p>Connectez-vous avec moi :</p>
          <ul className="social-links">
            {socialLinks.map((link, index) => {
              const IconComponent = iconMap[link.socialIcon];
              return (
                <li key={index}>
                  <a href={link.socialUl} target="_blank" rel="noopener noreferrer" title={link.socialName}>
                    <IconComponent className="icon" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
    );
  };
  

export default Footer;
