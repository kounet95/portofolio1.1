import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const Competence = ({ competence }) => {
  if (!competence) {
    return <div>Aucune donnée de compétence disponible.</div>;
  }

  return (
    <div className="competence-card">
      <div className="competence-header">
        <h5 className="competence-title">
          <strong>Description:</strong> {competence.description || 'Non disponible'}
        </h5>
      </div>
      
      <div className="competence-details">
        <div className="competence-item">
          <strong>Langages:</strong> {competence.languages || 'Non disponible'}
        </div>
        <div className="competence-item">
          <strong>Framework:</strong> {competence.framework || 'Non disponible'}
        </div>
        <div className="competence-item">
          <strong>Niveau:</strong> {competence.level || 'Non disponible'}
        </div>
        <div className="competence-item">
          <strong>Date:</strong> {competence.date ? new Date(competence.date).toLocaleDateString() : 'Non disponible'}
        </div>
      </div>

      {competence.lienGit && (
        <div className="competence-git-link">
          <strong>Voir le dépôt Git:</strong> 
          <a href={competence.lienGit} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="git-icon" />
          </a>
        </div>
      )}

      {competence.videoPresentation && (
        <div className="competence-video">
          <video width="100%" controls>
            <source src={competence.videoPresentation} type="video/mp4" />
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
        </div>
      )}
    </div>
  );
};
