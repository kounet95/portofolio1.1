package com.example.service;

import lombok.AllArgsConstructor;
import com.example.dao.CompetencesRequestDTO;
import com.example.dao.CompetencesResponseDTO;
import com.example.entity.MesCompetences;
import com.example.mappers.CompetencesMapper;

import com.example.repos.InterCompetences;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class ServiceServiceCompetences implements InterServiceCompetences {

    @Autowired
    private final InterCompetences interCompetences;

    @Autowired
    private final CompetencesMapper competencesMapper;


    @Override
    public CompetencesResponseDTO addCompetences(CompetencesRequestDTO competencesRequestDTO) {
        MesCompetences competences = competencesMapper.fromCompetencesRequestDTO(competencesRequestDTO);
        competences = interCompetences.save(competences);
        return competencesMapper.toCompetencesResponseDTO(competences);
    }

    @Override
    public CompetencesRequestDTO updateCompetences(CompetencesResponseDTO competencesResponseDTO) {
        MesCompetences competences = competencesMapper.fromCompetencesResponseDTO(competencesResponseDTO);
        Optional<MesCompetences> existingCompetencesOpt = interCompetences.findById(competences.getId());

        if (existingCompetencesOpt.isPresent()) {
            MesCompetences existingCompetences = existingCompetencesOpt.get();
            existingCompetences.setFramework(competences.getFramework());
            existingCompetences.setLanguages(competences.getLanguages());
            existingCompetences.setLienGit(competences.getLienGit());
            existingCompetences.setVideoPresentation(competences.getVideoPresentation());
            existingCompetences.setDescription(competences.getDescription());
            existingCompetences.setLevel(competences.getLevel());
            existingCompetences.setDate(competences.getDate());



            MesCompetences updatedCompetences = interCompetences.save(existingCompetences);
            return competencesMapper.toCompetencesRequestDTO(updatedCompetences);
        } else {
            throw new IllegalArgumentException("Competence not found");
        }
    }

    @Override
    public void deleteCompetences(Long id) {
        interCompetences.deleteById(id);
    }

    @Override
    public CompetencesResponseDTO getCompetences(Long id) {
        Optional<MesCompetences> competencesOpt = interCompetences.findById(id);
        if (competencesOpt.isPresent()) {
            return competencesMapper.toCompetencesResponseDTO(competencesOpt.get());
        } else {
            throw new IllegalArgumentException("Competence not found");
        }
    }

    @Override
    public Page<CompetencesResponseDTO> getAllCompetences(PageRequest pageRequest1, PageRequest pageRequest2) {
        return null;
    }

    @Override
    public Page<CompetencesResponseDTO> getAllCompetences(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        return interCompetences.findAll(pageRequest)
                .map(competencesMapper::toCompetencesResponseDTO); // Utilisation du mapper
    }





}
