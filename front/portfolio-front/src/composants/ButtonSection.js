import React from 'react';
import { userLinks } from '../data/data';
import '../monButon/ButtonSection.css'

const ButtonSection = () => (
  <section className="botones">
    {userLinks.map((data, index) => (
      <a key={index} href={data.link} className="boton" target="_blank" rel="nofollow noreferrer noopener">
        <iconify-icon icon={data.icon} width="25" height="25" className="iconify" />
        <span>{data.title}</span>
      </a>
    ))}
  </section>
);

export default ButtonSection;