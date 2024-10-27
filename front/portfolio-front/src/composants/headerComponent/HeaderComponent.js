import React from 'react';
import './HeaderComponent.css';

const HeaderComponent = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="name">Votre Nom Complet</h1>
                <h2 className="title">Développeur Full Stack</h2>
                <p className="introduction">
                    Bonjour ! Je suis un développeur passionné par la création de solutions innovantes et efficaces.
                </p>
                <p className="objective">
                    Ce portfolio a été conçu pour montrer mes projets, compétences et expériences professionnelles.
                </p>
            </div>
        </header>
    );
};

export default HeaderComponent;
