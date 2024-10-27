import React from 'react';
import './user.css';
const UserCard = ({ user }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-1000">
        <img src={user.userPic} className="card-img-top img-fluid" alt={user.userName} />

        <h5 className="card-title">{user.userName}</h5>
        <p className="card-text">{user.userDesc}</p>

        <div>
          <video width="640" height="360" controls>
            <source src={user.userVideo} type="video/mp4" />
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
