import React from 'react';
const LangFramework = () => {
  const langafrawork = [
    {
      name: "React",
      imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/react.png",
    },
    {
      name: "Angular",
      imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/angular.png",
    },
    {
      name: "Java",
      imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/java.png",
    },
    {
      name: "Eco Systeme de Spring",
      imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/Eco%20Systeme%20de%20Spring.png",
    },
    {
      name: "JavaScript",
      imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/javascript.png",
    },
    {
      name: "Symfony",
      imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/symfony.png",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Langages et Frameworks</h2>
      <div className="row">
        {langafrawork.map((item, index) => (
          <div className="col-12 col-md-4 col-lg-3 mb-4" key={index}>
            <div className="card h-100 text-center">
              <img
                src={item.imgUrl}
                alt={item.name}
                className="card-img-top rounded-circle" 
                style={{ height: '150px', width: '150px', objectFit: 'cover', margin: 'auto' }} 
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LangFramework;
