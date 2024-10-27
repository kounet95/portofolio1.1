import React, { useEffect, useState } from 'react';
import { getCompetence } from '../../service/repoCompetence';
import Competencesv1 from './Competencesv1';


function CompetenceListv1() {
    const [competences, setCompetences] = useState([]);

    useEffect(() => {
        fetchCompetences();
    }, []);

    const fetchCompetences = () => {
        getCompetence().then(resp => {
            setCompetences(resp.data);
        }).catch(error => {
            console.error("Erreur lors de la récupération des compétences:", error);
        });
    };

    return (
        <div className="container">
            <div className="row">
                {competences && competences.length > 0 ? (
                    competences.map((competence, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <Competencesv1 competence={competence} />
                        </div>

                     
                    ))
                ) : (
                    <div className="col-12">Aucune compétence disponible</div>
                )}
            </div>
        </div>
    );
}

export default CompetenceListv1;
