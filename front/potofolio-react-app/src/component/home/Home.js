import React from 'react';
import { userData } from '../../data/data';
import './styles.css';

import UserCard from '../monProfile/UserCard';
import ContactForm from '../contactFrom/ContactForm';
import Footer from '../foot/Footer';
import CircleImages from '../competenceImages/Mesimages';
import CircleImage from '../competenceImages/CircleImages';
import OutilsImage from '../Competence/outilles/ouitilles';

const passionStatements = [
  "Le développement logiciel est bien plus qu'un métier pour moi, c'est une véritable passion. Chaque ligne de code est une opportunité d'apprendre et d'innover.",
  "Je trouve une immense satisfaction dans la résolution de problèmes complexes ",
  "par le biais du code."
];

const passionDev = [
  "Chaque défi est une occasion de grandir et de me surpasser.",
  "Ma passion pour le développement logiciel est alimentée par la curiosité et le désir constant d'apprendre.",
  "Chaque technologie émergente et chaque mise à jour logicielle sont des opportunités d'apprendre."
];

const Home = () => {
  return (
    <div className="container">
      
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

      {/* Mes competences en images */}
      <section className="competenceImage">
        {/* Texte Défilant */}
        <section className="scrolling-text">
          <div className="scrolling-text-content">
            {passionDev.map((statement, index) => (
              <span key={index} className="scrolling-text-item">
                {statement}
              </span>
            ))}
          </div>
        </section>
      </section>
        {/* Section Competences */}
        <section className="section-title" id="competence">
        <div className="col-12">
          <h1>Pour mes Competences</h1>
          <hr />
        </div>
      </section>

<section className="contact-section" >

  <CircleImage/>
</section>
 {/* Section Outilles */}
 <section className="section-title" id="outils">
        <div className="col-12">
          <h1>Pour mes Outilles</h1>
          <hr />
        </div>
      </section>
<section className="contact-section" >
  <OutilsImage/>
</section>
      {/* Section Titre et Formulaire de Contact */}
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
