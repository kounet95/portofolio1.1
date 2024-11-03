import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'; 

const DemoLink = () => {
  return (
    <div className="competence-item">
      <strong>Voir La Demo </strong>
      <a 
        href="http://138.197.137.215:82/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="demo-link"
        style={{ marginLeft: '10px' }} 
      >
        <FontAwesomeIcon icon={faExternalLinkAlt} className="link-icon" />
      </a>
    </div>
  );
};

export default DemoLink;
