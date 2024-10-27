import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [currentAction, setCurrentAction] = useState("");
  const location = useLocation(); 

  useEffect(() => {
    const path = location.pathname;
    console.log(path);
    setCurrentAction(path);
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id='nav-bar'>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">kounettechnologie</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/images">Portofolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/doc">Lectures PDFWeb</Link>
            </li>
          
            {currentAction === "/home" && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#competence">compétences</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#outils">outils</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contacte-moi">Contact</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
