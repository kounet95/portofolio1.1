package com.example.mappers;

import com.example.dao.PresentationRequestDTO;
import com.example.dao.PresentationResponseDTO;
import com.example.entity.Presentation;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class PresentationMapper {

    private ModelMapper modelMapper = new ModelMapper();
    private List<Presentation> presentations = new ArrayList<>();

    /**
     * Convertit un PresentationResponseDTO en Presentation.
     */
    public Presentation fromPresentationResponseDTO(PresentationResponseDTO presentationResponseDTO) {
        return modelMapper.map(presentationResponseDTO, Presentation.class);
    }

    /**
     * Convertit un Presentation en PresentationResponseDTO.
     */
    public PresentationResponseDTO toPresentationResponseDTO(Presentation presentation) {
        return modelMapper.map(presentation, PresentationResponseDTO.class);
    }

    /**
     * Ajoute une présentation à la liste des présentations.
     */
    public void addPresentation(Presentation presentation) {
        presentations.add(presentation);
    }

    /**
     * Retourne une copie de la liste des présentations.
     */
    public List<Presentation> getPresentations() {
        return new ArrayList<>(presentations);
    }

    /**
     * Convertit un PresentationRequestDTO en Presentation.
     */
    public Presentation fromPresentationRequestDTO(PresentationRequestDTO presentationRequestDTO) {
        return modelMapper.map(presentationRequestDTO, Presentation.class);
    }

    /**
     * Convertit un Presentation en PresentationRequestDTO.
     */
    public PresentationRequestDTO toPresentationRequestDTO(Presentation presentation) {
        return modelMapper.map(presentation, PresentationRequestDTO.class);
    }
}
