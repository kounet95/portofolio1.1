import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import About from './About';
function AboutList() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
     
        mesMessage();
          
    }, []);


    const mesMessage = ()=>{
      axios.get("http://localhost:8082/api/portofolio/competences/comp") 
      .then(Respons=>{
        const message = Respons.data;
        setData(message);
        
      }).catch(err=>{
        console.log(err);
      })
    }
    return (

<div className="container">
    <div className="row">
      {data&& data.length > 0 ? (
        data.map((about, index) => (
          <About key={index} about={about} />
      
        ))
      ) : (
        <div>Aucun commentaire n'est disponible</div>
      )}
    </div>
  </div>
    );
}


export default AboutList
