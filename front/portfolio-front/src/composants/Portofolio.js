import React from 'react';
import '../monButon/Home.css';

function Portofolio({ projet }) {
    if (!projet) {
        return <div>Projets non disponibles</div>;
      }
  
    return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100">
        <img src={projet.projetPic} className="card-img-top img-fluid" alt={projet.projetName} />
        <div className="card-body">
          <h5 className="card-title">{projet.projetName}</h5>
          <p className="card-text">{projet.projetDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
