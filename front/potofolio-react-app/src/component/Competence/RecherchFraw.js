import React, { useState } from 'react';
import './competence.css';

export const CompetenceFramwork = ({ onSelectFramework }) => {
  const [selectedFramework, setSelectedFramework] = useState(null);

  const langafrawork = [
    { name: "React", imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/react.png" },
    { name: "Angular", imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/angular.png" },
    { name: "Java", imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/java.png" },
    { name: "Eco Systeme de Spring", imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/Eco%20Systeme%20de%20Spring.png" },
    { name: "JavaScript", imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/javascript.png" },
    { name: "Symfony", imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/symfony.png" },
  ];

  const handleFrameworkClick = (item) => {
    setSelectedFramework(item.name);
    onSelectFramework(item);
  };

  // Filtrage basé sur `name` et `framework`
  const filteredFrameworks = langafrawork.filter(item =>
    selectedFramework
      ? item.name.toLowerCase().includes(selectedFramework.toLowerCase()) ||
        item.name.toLowerCase() === selectedFramework.toLowerCase()
      : true
  );

  return (
    <div className="image-container">
      {filteredFrameworks.map((item, index) => (
        <div
          key={index}
          className="framework-image"
          onClick={() => handleFrameworkClick(item)}
        >
          <img
            src={item.imgUrl}
            alt={item.name}
            className="rounded-circle"
          />
        </div>
      ))}
    </div>
  );
};
