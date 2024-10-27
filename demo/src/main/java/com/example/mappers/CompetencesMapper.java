package com.example.mappers;

import com.example.dao.CompetencesRequestDTO;
import com.example.dao.CompetencesResponseDTO;

import com.example.entity.MesCompetences;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CompetencesMapper {

    private final ModelMapper modelMapper = new ModelMapper();
    private final List<MesCompetences> competencesList = new ArrayList<>();

    /**
     * Convertit un CompetencesRequestDTO en Competences.
     */
    public MesCompetences fromCompetencesRequestDTO(CompetencesRequestDTO competencesRequestDTO) {
        return modelMapper.map(competencesRequestDTO, MesCompetences.class);
    }

    /**
     * Convertit un CompetencesResponseDTO en Competences.
     */
    public MesCompetences fromCompetencesResponseDTO(CompetencesResponseDTO competencesResponseDTO) {
        return modelMapper.map(competencesResponseDTO, MesCompetences.class);
    }

    /**
     * Convertit un Competences en CompetencesRequestDTO.
     */
    public CompetencesRequestDTO toCompetencesRequestDTO(MesCompetences mesCompetences) {
        return modelMapper.map(mesCompetences, CompetencesRequestDTO.class);
    }

    /**
     * Convertit un Competences en CompetencesResponseDTO.
     */
    public CompetencesResponseDTO toCompetencesResponseDTO(MesCompetences competences) {
        return modelMapper.map(competences, CompetencesResponseDTO.class);
    }


    /**
     * Ajoute une compétence à la liste des compétences.
     */
    public void addCompetences(MesCompetences mesCompetences) {
        competencesList.add(mesCompetences);
    }

    /**
     * Retourne une copie de la liste des compétences.
     */
    public List<MesCompetences> getCompetencesList() {
        return new ArrayList<>(competencesList);
    }
}
