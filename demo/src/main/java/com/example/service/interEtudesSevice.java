package com.example.service;

import com.example.dao.EtudeRequestDTO;
import com.example.dao.EtudeResponseDTO;


import java.util.List;

public interface interEtudesSevice {
    EtudeResponseDTO addEtude(EtudeRequestDTO etudeRequestDTO);
    EtudeRequestDTO updatEtude(EtudeResponseDTO etudeResponseDTO);
    void deleteEtude(Long id);
    EtudeResponseDTO getEtude(Long id);
    List<EtudeResponseDTO> getAllProjets();
}
