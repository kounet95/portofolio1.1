import React, { useEffect, useState, useRef } from 'react';
import { userData } from '../../data/data';
import './styles.css';

import UserCard from '../monProfile/UserCard';
import ContactForm from '../contactFrom/ContactForm';
import Footer from '../foot/Footer';
import CircleImages from '../competenceImages/Mesimages';

const passionStatements = [
  "Le développement logiciel est bien plus qu'un métier pour moi, c'est une véritable passion. Chaque ligne de code est une opportunité d'apprendre et d'innover.",
  "Je trouve une immense satisfaction dans la résolution de problèmes complexes",
  "par le biais du code."
];

const competences = [
  { name: 'JavaScript', description: 'Langage de programmation principal pour le développement web interactif côté client' },
  { name: 'PHP', description: 'Langage de programmation principal pour le développement web interactif côté serveur' },
  { name: 'Symfony', description: 'Un framework PHP utilisé principalement pour le développement web interactif côté serveur' },
  { name: 'React', description: 'Bibliothèque JavaScript pour la création d\'interfaces utilisateur dynamiques' },
  { name: 'Angular', description: 'Bibliothèque JavaScript pour la création d\'interfaces utilisateur dynamiques' },
  { name: 'Eco Systeme de Spring', description: 'Un framework Java pour la création d\'interfaces utilisateur dynamiques avec des templates côté serveur et pour le développement back-end' },
  { name: 'Node.js', description: 'Environnement d\'exécution JavaScript côté serveur pour le développement back-end' },
  { name: 'SQL', description: 'Langage de requêtes pour interroger et manipuler des bases de données relationnelles' },
  { name: 'Python', description: 'Langage de programmation orienté objet, utilisé pour des logiciels, traitement de données et IA' }
];

const Home = ({ imagescompetence }) => {
  const [visibleDescriptions, setVisibleDescriptions] = useState(Array(competences.length).fill(false));
  const competenceRefs = useRef([]);

  const getImageForCompetence = (competenceName) => {
    if (!imagescompetence) {
      console.error("imagescompetence is undefined");
      return `https://raw.githubusercontent.com/kounet95/portofolio-images/main/${competenceName.toLowerCase()}.png`;
    }
    const image = imagescompetence.find(img => img.name === competenceName);
    return image
      ? `https://raw.githubusercontent.com/kounet95/portofolio-images/main/${image.imgUrl}`
      : `https://raw.githubusercontent.com/kounet95/portofolio-images/main/${competenceName.toLowerCase()}.png`;
  };

  const handleScroll = () => {
    competenceRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisibleDescriptions(prev => {
            const newVisibleDescriptions = [...prev];
            newVisibleDescriptions[index] = true; // Met à jour l'état pour montrer la description
            return newVisibleDescriptions;
          });
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="container">
      {/* Section de ma présentation */}
      <section className="user-section" id="user-section">
        <div className="left-section">
          {userData.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
          <section className="scrolling-text">
            <div className="scrolling-text-content">
              {passionStatements.map((statement, index) => (
                <span key={index} className="scrolling-text-item">
                  {statement}
                </span>
              ))}
            </div>
          </section>
        </div>
        <div className="right-section">
          <CircleImages />
        </div>
      </section>

      <div className="container">
      <section className="section-title" id="competence">
        <div className="col-12">
          <h1>Mes Compétences</h1>
          <hr />
        </div>
        <div className="competence-list">
          {competences.map((competence, index) => (
            <div
              key={index}
              className="competence-card"
              ref={el => competenceRefs.current[index] = el}
            >
              <img
                src={getImageForCompetence(competence.name)}
                alt={competence.name}
                className="card-img-top img-fluid rounded-circle"
                
              />
              <h3>{competence.name}</h3>
              {visibleDescriptions[index] && <p>{competence.description}</p>}
            </div>
          ))}
        </div>
      </section>

      </div>

      {/* Section Outillage */}
      <section className="section-title" id="outils">
        <div className="col-12">
          <h1>Mes Outils</h1>
          <hr />
        </div>
        <div className="outils-list">
          {[{ name: 'Git', imgUrl: 'https://raw.githubusercontent.com/kounet95/portofolio-images/main/Git.png', description: 'Système de contrôle de version' },
          { name: 'GitLab', imgUrl: 'https://raw.githubusercontent.com/kounet95/portofolio-images/main/gitlab.jpg', description: 'CI/CD intégré à GitLab qui permet automatisation des tests et des déploiements' },
            { name: 'Docker', imgUrl: 'https://raw.githubusercontent.com/kounet95/portofolio-images/main/docker.png', description: 'Outil de virtualisation' },
            { name: 'jira', imgUrl: 'https://raw.githubusercontent.com/kounet95/portofolio-images/main/jira.png', description: 'Outil de colaboration et gestion de projet' },
            { name: 'Ansible', imgUrl: 'https://raw.githubusercontent.com/kounet95/portofolio-images/main/Ansible.jpg', description: 'Outil pour automatisation qui gère la configuration et le déploiement des applications' },
            { name: 'VS Code', imgUrl: 'https://raw.githubusercontent.com/kounet95/portofolio-images/main/visualstudiocode.jpg', description: 'Éditeur de code' }
          ].map((outil, index) => (
            <div key={index} className="outil-card">
              <img src={outil.imgUrl} alt={outil.name} className="outil-img" />
              <h3>{outil.name}</h3>
              <p>{outil.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Contact */}
      <section className="section-title" id="contacte-moi">
        <div className="col-12">
          <h1>Pour me contacter, utilisez le Formulaire.</h1>
          <hr />
        </div>
      </section>
      <section className="contact-section">
        <ContactForm />
      </section>

      {/* Section Footer */}
      <section className="footer-section">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
