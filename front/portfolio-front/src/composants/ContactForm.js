import React, { useState } from 'react';
import axios from 'axios';
import '../monButon/contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    entreprise: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoi des données du formulaire à l'API
    axios.post('http://localhost:8082/api/portofolio/addMessage', formData)
      .then(response => {
        console.log('Form submitted successfully', response.data);
        setFormStatus('Message envoyé avec succès !');
        // Réinitialiser le formulaire
        setFormData({
          name: '',
          email: '',
          entreprise: '',
          message: ''
        });
      })
      .catch(error => {
        console.error('There was an error submitting the form!', error);
        setFormStatus('Erreur lors de l\'envoi du message. Veuillez réessayer.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Contactez-moi</h2>
      <div className="form-group">
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="entreprise">Nom de l'entreprise</label>
        <input
          type="text"
          id="entreprise"
          name="entreprise"
          value={formData.entreprise}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Envoyer</button>
      {formStatus && <p className="form-status">{formStatus}</p>}
    </form>
  );
};

export default ContactForm;
