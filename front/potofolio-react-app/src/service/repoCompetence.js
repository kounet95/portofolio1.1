import axios from "axios";

export const competenceUrl = axios.create({
    baseURL: "http://localhost:8082/api/portofolio/competences",
});

export const getCompetences = (page = 0, size = 3) => {
    return competenceUrl.get(`/all?page=${page}&size=${size}`);
};

export const deleteCompetence = (competence) => {
    return competenceUrl.delete(`/delete/${competence.id}`);
};

export const updateCompetence = (competence) => {
    return competenceUrl.put(`/update`, competence);
};

export const saveCompetence = (competence) => {
    return competenceUrl.post(`/add`, competence);
};

export const getCompetence = (id) => {
    return competenceUrl.get(`/id/${id}`);
};
