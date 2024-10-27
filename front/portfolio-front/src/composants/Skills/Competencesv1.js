import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Competencesv1() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchCompetences();
    }, []);

    const fetchCompetences = () => {
        axios.get("http://localhost:8082/api/portofolio/competences/comp")
            .then(response => {
                setData(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="container">
            <h2>Mes Compétences</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Langages</th>
                    <th>Framework</th>
                    <th>Filback</th>
                    <th>Vidéo Temoignage</th>
                    <th>Niveau</th>
                    <th>Date</th>
                    <th>Voir le démo</th>
                    <th>Repo</th>
                </tr>
                </thead>
                <tbody>
                {data && data.length > 0 ? (
                    data.map((competence, index) => (
                        <tr key={competence.id}>
                            <td>{index + 1}</td>
                            <td>{competence.lagages}</td>
                            <td>{competence.framework}</td>
                            <td>{competence.filback}</td>
                            <td>{competence.videoTmoi}</td>
                            <td>{competence.niveau}</td>
                            <td>{competence.date}</td>
                            <td>{/* Lien vers la démo */}</td>
                            <td>{/* Lien vers le repo */}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="9">Aucune compétence n'est disponible</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default Competencesv1;
