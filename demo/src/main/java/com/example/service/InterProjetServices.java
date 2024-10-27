package com.example.service;



import com.example.dao.ProjetRequestDTO;
import com.example.dao.ProjetResponseDTO;
import org.springframework.data.domain.Page;

import java.util.List;

public interface InterProjetServices {
    ProjetResponseDTO addProjet(ProjetRequestDTO projetRequestDTO);
    ProjetRequestDTO updateProjet(ProjetResponseDTO projetResponseDTO);
    void deleteProjet(Long id);
    ProjetResponseDTO getProjet(Long id) throws IllegalArgumentException;
    Page<ProjetResponseDTO> getAllProjets(int page, int size);
}
