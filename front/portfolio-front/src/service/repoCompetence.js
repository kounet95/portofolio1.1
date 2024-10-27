import axios from "axios"

export const competenceUrl = axios.create({
    baseURL:"http://localhost:8082/api/portofolio/competences",
});

export const getCompetences= ()=>{
    return competenceUrl.get(`/comp`);
} 
export const deleteCompetence= (competence)=>{
    return competenceUrl.delete(`/comp/${competence.id}`);
} 
export const updateCompetence= (competence)=>{
    return competenceUrl.put(`/comp/${competence}`);
} 
export const saveCompetence= (competence)=>{
    return competenceUrl.post(`/comp/${competence}`);
} 
export const getCompetence= (id)=>{
    return competenceUrl.get(`/comp/${id}`);
} 