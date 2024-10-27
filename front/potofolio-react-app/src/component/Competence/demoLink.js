import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'; // Utilise l'icône de lien externe

const DemoLink = () => {
  return (
    <div className="competence-item">
      <strong>Voir La Demo </strong>
      <a 
        href="https://www.example.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="demo-link"
        style={{ marginLeft: '10px' }} // Optionnel : espace entre le texte et l'icône
      >
        <FontAwesomeIcon icon={faExternalLinkAlt} className="link-icon" />
      </a>
    </div>
  );
};

export default DemoLink;
