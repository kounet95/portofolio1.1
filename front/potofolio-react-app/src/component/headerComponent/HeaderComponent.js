import React from 'react';
import './HeaderComponent.css';

const HeaderComponent = () => {
    return (
        <header className="header">
          <div className="header-content">
            <h1 className="name">ALPHA OUMAR DIALLO</h1>
            <h2 className="title">Développeur Full Stack</h2>
            <p className="introduction">
              Je suis un développeur full stack avec une solide expertise dans la conception de solutions informatiques.
              J'ai une maîtrise approfondie de plusieurs langages de programmation, outils de développement, ainsi qu'une
              expérience notable dans la mise en œuvre de projets complexes en microservices et intelligence artificielle.
              Passionné par l'innovation et la résolution de problèmes, je possède également une forte capacité à gérer des 
              systèmes distribués et à assurer la sécurité logicielle.
            </p>
            <h3>Compétences Techniques :</h3>
            <ul>
              <li><strong>Langages de Programmation :</strong> Python, C/C++, C#, Java, JavaScript, CSS, HTML</li>
              <li><strong>Frameworks :</strong> Spring, Symfony, Laravel, React, Angular</li>
              <li><strong>Bases de données :</strong> SQL, Oracle, MongoDB, Cassandra</li>
              <li><strong>Outils et Plateformes :</strong> Docker, Kubernetes, Jenkins, Git, Unity</li>
              <li><strong>Systèmes d’exploitation :</strong> Windows Server, Linux (Ubuntu, CentOS)</li>
              <li><strong>Réseaux :</strong> Configuration réseau, câblage, routage... (IPV4/IPV6)</li>
            </ul>
            <h3>Compétences en Architecture Logicielle :</h3>
            <ul>
              <li>Microservices (REST, SOAP, GRPC, GraphQL)</li>
              <li>Middleware et Brokers (RabbitMQ, Kafka, ActiveMQ)</li>
              <li>Caches mémoires distribués (Hazelcast, Zookeeper)</li>
            </ul>
            <h3>Sécurité Logicielle :</h3>
            <ul>
              <li>OAuth2, JWT, Keycloak</li>
            </ul>
            <h3>Intelligence Artificielle :</h3>
            <ul>
              <li>Systèmes multi-agents distribués</li>
              <li>Microservices asynchrones</li>
            </ul>
            <h3>Expérience Professionnelle :</h3>
            <ul>
              <li><strong>Ingénieur IT, Afro-Global Invest (2022 - présent)</strong> - Dépannage et réparation d'applications et sites web, développement de solutions en microservices</li>
              <li><strong>Leader Net Services (2021 - 2022)</strong> - Déploiement d'infrastructures réseau, maintenance de systèmes de vidéosurveillance</li>
            </ul>
            <h3>Formation :</h3>
            <ul>
              <li><strong>Techniques des systèmes informatiques (2024)</strong> - Collège Boréal, Canada</li>
              <li><strong>Génie informatique (2020)</strong> - Gamal Abdel Nasser, Guinée</li>
            </ul>
          </div>
        </header>
      );
      
};

export default HeaderComponent;
