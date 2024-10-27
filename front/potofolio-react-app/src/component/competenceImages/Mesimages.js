import React from 'react';
import './styles.css';

const frameworks = [
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
    name: "MySQL",
    imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/sgbd.png",
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

const CircleImages = () => {
  return (
    <div className="circle-container">
      <div className="circle-wrapper">
        {frameworks.map((framework, index) => (
          <div key={index} className="circle-item">
            <img src={framework.imgUrl} alt={framework.name} className="circle-img" />
            <p>{framework.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleImages;
