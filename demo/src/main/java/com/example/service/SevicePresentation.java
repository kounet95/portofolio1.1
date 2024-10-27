package com.example.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import com.example.dao.PresentationRequestDTO;
import com.example.dao.PresentationResponseDTO;
import com.example.entity.Presentation;
import com.example.mappers.PresentationMapper;
import com.example.repos.InterPresentation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@Slf4j
@AllArgsConstructor
public class SevicePresentation implements InterServicePresentaion {

    @Autowired
    private final InterPresentation interPresentation;

    @Autowired
    private final PresentationMapper presentationMapper;

    @Override
    public PresentationResponseDTO addpresenatation(PresentationRequestDTO presentationRequestDTO) {
        Presentation presentation = presentationMapper.fromPresentationRequestDTO(presentationRequestDTO);
        presentation = interPresentation.save(presentation);
        return presentationMapper.toPresentationResponseDTO(presentation);
    }

    @Override
    public PresentationRequestDTO updatepresenatation(PresentationResponseDTO presentationResponseDTO) {
        // Convertir le DTO en entité
        Presentation presentation = presentationMapper.fromPresentationResponseDTO(presentationResponseDTO);

        // Rechercher l'entité existante dans la base de données
        Optional<Presentation> existingPresentationOpt = interPresentation.findById(presentation.getId());

        if (existingPresentationOpt.isPresent()) {
            Presentation existingPresentation = existingPresentationOpt.get();

            // Mettre à jour les champs nécessaires
            existingPresentation.setNom(presentation.getNom());
            existingPresentation.setVideoPresentation(presentation.getVideoPresentation());
            existingPresentation.setExperiences(presentation.getExperiences());
            existingPresentation.setPrenom(presentation.getPrenom());



            // Ajouter d'autres champs à mettre à jour selon votre entité

            // Sauvegarder les modifications
            Presentation updatedPresentation = interPresentation.save(existingPresentation);

            // Convertir l'entité mise à jour en DTO de demande
            return presentationMapper.toPresentationRequestDTO(updatedPresentation);
        } else {
            throw new IllegalArgumentException("Presentation not found");
        }
    }
    public void deletePresentation(Long id) {
        interPresentation.deleteById(id);
    }

    @Override
    public PresentationResponseDTO getProjet(Long id) throws IllegalArgumentException {
        return null;
    }

    @Override
    public List<PresentationResponseDTO> getAllProjets() {
        return List.of();
    }


    public PresentationResponseDTO getPresentation(Long id) {
        Optional<Presentation> presentationOpt = interPresentation.findById(id);
        if (presentationOpt.isPresent()) {
            return presentationMapper.toPresentationResponseDTO(presentationOpt.get());
        } else {
            throw new IllegalArgumentException("Presentation not found");
        }
    }

    public List<Presentation> getAllPresentations() {
        return interPresentation.findAll();
    }
}
