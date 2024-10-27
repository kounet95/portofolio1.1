import React from 'react'

function About(about) {
    if (!about) {
        return <div>Moi au 21eme Siecle:je vais parler de moi brievement et mes Travaux actuel </div>;
      }
  
    return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100">
        <img src={about.aboutPic} className="card-img-top img-fluid" alt={about.aboutName} />
        <div className="card-body">
          <h5 className="card-title">{about.aboutName}</h5>
          <p className="card-text">{about.aboutDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default About
