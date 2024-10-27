import React from 'react';
import { userData, } from '../../data/data';

import UserCard from '../UserCard';
import ContactForm from '../ContactForm';

import Footer from '../Footer'; 
import AboutList from '../AboutList';

const Home = () => {
  return (
      <div className="container">
          {/* Section Profil Utilisateur */}
          <section className="user-section" id="user-section">
              <div className="content">
                  <div className="left-section">
                      {userData.map((user, index) => (
                          <UserCard key={index} user={user}/>
                      ))}
                  </div>

                 

              {/* Autres sections */}
          </div>
          </section>
          <section className="section-title">
              <div className="col-12">
                  <h1>Pour me contacter, utilisez le Formulaire.</h1>
                  <hr/>
              </div>
          </section>

          {/* Section Formulaire de Contact */}
          <section className="contact-section">
              <ContactForm/>
          </section>


          <section className="section-title">
              <div className="col-12">
                  <h1>KOUNETEXPRESS.</h1>
                  <hr/>
              </div>
          </section>
          <AboutList/>
          {/* Section Footer */}
          <section className="footer-section">
              <Footer/>
          </section>
      </div>
  );
};

export default Home;
