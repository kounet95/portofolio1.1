import React from 'react';
import Portofolio from './Portofolio';
import { projetData } from '../data/dataProjet';

function PortofolioList() {
  return (
    <div className="container">
    <div className="row">
      {projetData && projetData.length > 0 ? (
        projetData.map((projet, index) => (
          <Portofolio key={index} projet={projet} />
      
        ))
      ) : (
        <div>Aucun projet disponible</div>
      )}
    </div>
  </div>
  );
}

export default PortofolioList;
