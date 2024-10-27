import React from 'react';
import './styles.css'; 

const CircleImage = () => {
  return (
    <div className="circle-container">
      <div className="card-body">
        {/* Image circulaire normale */}
        <img
          src="https://raw.githubusercontent.com/kounet95/portofolio-images/main/symfony.png"
          alt="Circle"
        />
      </div>

      <div className="card-body">
        {/* Image circulaire avec ombre */}
        <img
          src="https://raw.githubusercontent.com/kounet95/portofolio-images/main/javascript.png"
          alt="Circle with shadow"
        />
      </div>

      <div className="card-body">
        {/* Image circulaire avec arrière-plan coloré */}
        <img
          src="https://raw.githubusercontent.com/kounet95/portofolio-images/main/Eco%20Systeme%20de%20Spring.png"
          alt="Circle with background"
        />
      </div>
    </div>
  );
};

export default CircleImage;
