import React, { useState } from 'react'
import { saveCompetence } from '../../service/repoCompetence';

export default function Ajout() {
    const [competence, setCompetence] = useState({
        languages: "",
        framework: "",
        lienGit: "",
        videoPresentation: "",
        date: "",
        level: 0,
        description: ""
    });

    const handleChange = (e) => {
        setCompetence({
            ...competence,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveCompetence(competence)
            .then(response => {
                console.log('Compétence ajoutée avec succès:', response.data);
               
            })
            .catch(err => {
                console.error('Erreur lors de l\'ajout de la compétence:', err);
            });
    };

  return (
    <div className="container mt-5">
            <h2 className="mb-4">Ajouter une Compétence</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="languages" className="form-label">Langue</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="languages" 
                        name="languages" 
                        value={competence.languages} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="framework" className="form-label">Framework</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="framework" 
                        name="framework" 
                        value={competence.framework} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lienGit" className="form-label">lien depot</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="lienGit" 
                        name="lienGit" 
                        value={competence.lienGit} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="videoPresentation" className="form-label">Vidéo de Présentation</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="videoPresentation" 
                        name="videoPresentation" 
                        value={competence.videoPresentation} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="date" 
                        name="date" 
                        value={competence.date} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="level" className="form-label">Niveau</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="level" 
                        name="level" 
                        value={competence.level} 
                        onChange={handleChange} 
                        min="0"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea 
                        className="form-control" 
                        id="description" 
                        name="description" 
                        rows="3" 
                        value={competence.description} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>
        </div>
    );
}
