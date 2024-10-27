import React from 'react';
import '../monButon/Home.css'
const UserCard = ({ user }) => {
  return (
    
    <div className="col-12 col-md-6 col-lg-4 mb-4">
       <div className="card h-100">
      <img src={user.userPic} className="card-img-top img-fluid" alt={user.userName} />
      <div className="card-body">
        <h5 className="card-title">{user.userName}</h5>
        <p className="card-text">{user.userDesc}</p>

      </div>
    </div>
    </div>
  );
};

export default UserCard;
