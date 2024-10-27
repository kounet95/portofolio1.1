import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
function Message() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
     
        mesMessage();
          
    }, []);


    const mesMessage = ()=>{
      axios.get("http://localhost:8082/api/portofolio/messages") 
      .then(Respons=>{
        const message = Respons.data;
        console.log(message)
       // setData(message);
        
      }).catch(err=>{
        console.log(err);
      })
    }
    return (
        <div>
        {data.map((item) => (
          <div key={item.id}>
            <h3>{item.nom}</h3>
            <p>Entreprise: {item.nomEtreprise}</p>
            <p>Email: {item.email}</p>
            <p>Message: {item.message}</p>
          </div>
        ))}
      </div>
    );
  };

export default Message
