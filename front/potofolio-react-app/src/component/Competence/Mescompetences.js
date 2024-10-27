import React, { useEffect, useState } from 'react';
import { getCompetences } from '../../service/repoCompetence';
import { Competence } from '../Competence/Competence';
import './competence.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CompetenceFramwork } from './RecherchFraw';

export default function Mescompetences() {
    const [search, setSearch] = useState("");
    const [selectedFramework, setSelectedFramework] = useState(""); 
    const [state, setState] = useState({
        competences: [],
        page: 0,
        size: 4,
        keyWord: "",
        totalPages: 0,
    });

    useEffect(() => {
        fetchCompetences(state.page, state.size, state.keyWord);
    }, [state.page, state.size, state.keyWord]);

    const fetchCompetences = (page, size, keyWord) => {
        getCompetences(page, size, keyWord)
            .then(response => {
                const data = response.data;
                const totalElements = data.totalElements || 0;
                const totalPages = Math.ceil(totalElements / size);

                setState(prevState => ({
                    ...prevState,
                    competences: data.competences || [],
                    totalPages: totalPages,
                    page: data.currentPage || 0,
                }));
            })
            .catch(err => {
                console.log('Erreur:', err);
            });
    };

    const handlePageChange = (page) => {
        if (page >= 0 && page < state.totalPages) {
            setState(prevState => ({
                ...prevState,
                page: page
            }));
        }
    };

    const findCompetence = (e) => {
      e.preventDefault();
      
      setState(prevState => ({
          ...prevState,
          keyWord: search,
          page: 0
      }));
    };

    const filteredCompetences = selectedFramework
        ? state.competences.filter(comp => comp.framework === selectedFramework)
        : state.competences;

    const handleFrameworkSelect = (framework) => {
        setSelectedFramework(framework.name); 
    };

    return (
        <div className="competence-list">
            <CompetenceFramwork onSelectFramework={handleFrameworkSelect} /> 
            
            <div className="search-bar">
                <form onSubmit={findCompetence}>
                    <div className='row g-2'>
                        <div className='col-auto'>
                            <input 
                                value={search} 
                                onChange={(e) => setSearch(e.target.value)} 
                                className='form-control' 
                            />
                        </div>
                        <div className='col-auto'>
                            <button type='submit' className='btn btn-success'>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {filteredCompetences.length > 0 ? (
                filteredCompetences.map((comp) => (
                    <Competence key={comp.id} competence={comp} />
                ))
            ) : (
                <p>Aucune compétence trouvée pour le framework sélectionné.</p>
            )}

            <div className="pagination-controls">
                <button 
                    onClick={() => handlePageChange(state.page - 1)} 
                    disabled={state.page === 0}
                    className='btn btn-outline-info ms-2'
                >
                    Précédent
                </button>

                <ul className="nav nav-pills">
                    {Array.from({ length: state.totalPages }).map((_, index) => (
                        <li key={index} className="nav-item">
                            <button 
                                onClick={() => handlePageChange(index)} 
                                className={`btn btn-outline-info ms-2 ${state.page === index ? 'active' : ''}`}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>

                <button 
                    onClick={() => handlePageChange(state.page + 1)} 
                    disabled={state.page === state.totalPages - 1}
                    className='btn btn-outline-info ms-2'
                >
                    Suivant
                </button>
            </div>
        </div>
    );
}
