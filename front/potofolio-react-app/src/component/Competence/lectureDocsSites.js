import React from 'react';

const LectureDocsSites = () => {
  const lectures = [
    {
      name: "w3schools",
      type: "site web",
      imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/lecture/w3shools.png",
      link: "https://www.w3schools.com/"
    },
    {
      name: "wildcodeschool",
      type: "site web",
      imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/lecture/wildcodeschool.PNG",
      link: "https://apply.wildcodeschool.com/"
    },
    {
      name: "Guide to Microservices",
      type: "web",
      imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/lecture/spring.png",
      link: "https://www.baeldung.com/library/spring-microservices-guide"
    },
    {
      name: "developpez",
      type: "web",
      imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/lecture/developpez.jpg",
      link: "https://sqlpro.developpez.com/cours/bddexemple/"
    }
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Mes Lectures : Documents PDF et Sites Web</h2>
      <div className="row">
        {lectures.map((item, index) => (
          <div className="col-12 col-md-4 col-lg-3 mb-4" key={index}>
            <div className="card h-100 text-center">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  className="card-img-top rounded-circle" 
                  style={{ height: '150px', width: '150px', objectFit: 'cover', margin: 'auto' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LectureDocsSites;
