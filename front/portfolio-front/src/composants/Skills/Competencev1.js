import React from 'react';

function Competence({ competence }) {
    return (
        <div className="card h-100">
            <img src={competence.competencePic} className="card-img-top" alt={competence.competenceName} />
            <div className="card-body">
                <h5 className="card-title">{competence.competenceName}</h5>
                <p className="card-text">{competence.competenceDesc}</p>
                <p className="card-text">Niveau: {competence.competenceLevel}</p>
                <a href={competence.competenceDemo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Voir la Démo
                </a>
                <a href={competence.competenceRepo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary ml-2">
                    Voir le Repo
                </a>
            </div>
        </div>
    );
}

export default Competence;
