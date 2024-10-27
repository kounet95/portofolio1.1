package com.example.mappers;

import com.example.dao.MessageRequest;
import com.example.dao.PresentationResponseDTO;
import com.example.dao.ProjetRequestDTO;
import com.example.dao.ProjetResponseDTO;
import com.example.entity.MesEtudes;
import com.example.entity.MesProjets;
import com.example.entity.Message;
import com.example.entity.Presentation;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ProjetMapper {

    private ModelMapper modelMapper = new ModelMapper();
    private List<MesProjets> mesEtudesList = new ArrayList<>();


    /**
     * Convertit un ProjetRequestDTO en entité Projet.
     * @param projetRequestDTO Le DTO de requête de projet.
     * @return L'entité Projet.
     */
    public MesProjets fromProjetRequestDTO(ProjetRequestDTO projetRequestDTO) {
        return modelMapper.map(projetRequestDTO, MesProjets.class);
    }

    /**
     * Convertit une entité Projet en ProjetResponseDTO.
     * @param projet L'entité Projet.
     * @return Le DTO de réponse de projet.
     */
    public ProjetResponseDTO toProjetResponseDTO(MesProjets projet) {
        return modelMapper.map(projet, ProjetResponseDTO.class);
    }



    /**
     * Convertit un Competences en CompetencesRequestDTO.
     */
    public ProjetRequestDTO toProjetRequestDTO(MesProjets mesProjets) {
        return modelMapper.map(mesProjets, ProjetRequestDTO.class);
    }



    /**
     * Convertit un ProjetResponseDTO en entité Projet.
     * @param projetResponseDTO Le DTO de réponse de projet.
     * @return L'entité Projet.
     */
    public MesProjets fromProjetResponseDTO(ProjetResponseDTO projetResponseDTO) {
        return modelMapper.map(projetResponseDTO, MesProjets.class);
    }
}
