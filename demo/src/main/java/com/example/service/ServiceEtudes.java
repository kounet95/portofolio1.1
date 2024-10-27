package com.example.service;

import lombok.AllArgsConstructor;
import com.example.dao.EtudeRequestDTO;
import com.example.dao.EtudeResponseDTO;
import com.example.entity.MesEtudes;
import com.example.mappers.EtudesMapper;
import com.example.repos.InterEtudes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
@AllArgsConstructor
public class ServiceEtudes implements interEtudesSevice {
    @Autowired
    private final InterEtudes interEtudes;
    @Autowired
    private final EtudesMapper etudesMapper;

    @Override
    public EtudeResponseDTO addEtude(EtudeRequestDTO etudeRequestDTO) {
        MesEtudes mesEtudes = etudesMapper.fromEtudeRequestDTO(etudeRequestDTO);
        mesEtudes = interEtudes.save(mesEtudes);
        return etudesMapper.toEtudeResponseDTO(mesEtudes);
    }

    @Override
    public EtudeRequestDTO updatEtude(EtudeResponseDTO etudeResponseDTO) {
        // Convertir le DTO en entité
        MesEtudes mesEtudes = etudesMapper.fromEtudeResponseDTO(etudeResponseDTO);

        // Rechercher l'entité existante dans la base de données
        MesEtudes existingEtudes = interEtudes.findById(mesEtudes.getId()).orElseThrow(() -> new IllegalArgumentException("Etude not found"));

        // Mettre à jour les champs nécessaires
        existingEtudes.setAddress(mesEtudes.getAddress());
        existingEtudes.setDesignation(mesEtudes.getDesignation());
        existingEtudes.setImagesPres(mesEtudes.getImagesPres());
        existingEtudes.setPlusInfo(mesEtudes.getPlusInfo());


        // Sauvegarder les modifications
        interEtudes.save(existingEtudes);

        // Convertir l'entité mise à jour en DTO de demande
        return etudesMapper.toEtudeRequestDTO(existingEtudes);
    }

    @Override
    public void deleteEtude(Long id) {
        interEtudes.deleteById(id);
    }

    @Override
    public EtudeResponseDTO getEtude(Long id) {
        Optional<MesEtudes> mesEtudes = interEtudes.findById(id);
        if (mesEtudes.isPresent()) {
            return etudesMapper.toEtudeResponseDTO(mesEtudes.get());
        } else {
            throw new IllegalArgumentException("Competence not found");
        }
    }

    @Override
    public List<EtudeResponseDTO> getAllProjets() {
        List<MesEtudes> etudesList = interEtudes.findAll();
        return etudesList.stream()
                .map(etudesMapper::toEtudeResponseDTO)
                .collect(Collectors.toList());
    }
}
