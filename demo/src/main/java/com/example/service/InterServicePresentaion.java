package com.example.service;

import com.example.dao.PresentationRequestDTO;
import com.example.dao.PresentationResponseDTO;
import com.example.dao.ProjetResponseDTO;

import java.util.List;

public interface InterServicePresentaion {
    PresentationResponseDTO addpresenatation(PresentationRequestDTO presentationRequestDTO);
    PresentationRequestDTO updatepresenatation(PresentationResponseDTO presentationResponseDTO);
    void deletePresentation(Long id);
    PresentationResponseDTO getProjet(Long id) throws IllegalArgumentException;
    List<PresentationResponseDTO> getAllProjets();
}
