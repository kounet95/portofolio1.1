package com.example.service;

import com.example.dao.CompetencesRequestDTO;
import com.example.dao.CompetencesResponseDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.List;

public interface InterServiceCompetences {
   CompetencesResponseDTO addCompetences(CompetencesRequestDTO competencesRequestDTO);
   CompetencesRequestDTO updateCompetences(CompetencesResponseDTO competencesResponseDTO);
    void deleteCompetences(Long id);
    CompetencesResponseDTO getCompetences(Long id);
    Page<CompetencesResponseDTO> getAllCompetences(PageRequest pageRequest1, PageRequest pageRequest2 );

    Page<CompetencesResponseDTO> getAllCompetences(int page, int size);
}
