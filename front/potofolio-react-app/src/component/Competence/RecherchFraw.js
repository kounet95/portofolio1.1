import React from 'react';
import './competence.css'; 

export const CompetenceFramwork = ({ onSelectFramework }) => {
  const langafrawork = [
    {
      name: "React",
      imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/react.png",
    },
    {
      name: "Angular",
      imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/angular.png",
    },
    {
      name: "Java",
      imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/java.png",
    },
    {
      name: "Eco Systeme de Spring",
      imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/Eco%20Systeme%20de%20Spring.png",
    },
    {
      name: "JavaScript",
      imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/javascript.png",
    },
    {
      name: "Symfony",
      imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/symfony.png",
    },
  ];

  return (
    <div className="image-container">
      {langafrawork.map((item, index) => (
        <div
          key={index}
          className="mx-2"
          onClick={() => onSelectFramework(item)} 
          style={{ cursor: 'pointer' }} 
        >
          <img
            src={item.imgUrl}
            alt={item.name}
            className="rounded-circle"
            style={{ height: '80px', width: '80px', objectFit: 'cover' }}
          />
        </div>
      ))}
    </div>
  );
};
