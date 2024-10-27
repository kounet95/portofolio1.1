package com.example.service;

import lombok.AllArgsConstructor;
import com.example.dao.ProjetRequestDTO;
import com.example.dao.ProjetResponseDTO;
import com.example.entity.MesProjets;
import com.example.mappers.ProjetMapper;
import com.example.repos.InterProjet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service @Transactional @AllArgsConstructor
public class InterProjetServicesImpl implements InterProjetServices {

    @Autowired
    private final InterProjet interProjetRepository;

    @Autowired
    private final ProjetMapper projetMapper;

    /**
     * Ajoute un nouveau projet.
     *
     * @param projetRequestDTO Le DTO de requête de projet.
     * @return Le DTO de réponse de projet après l'ajout.
     */
    @Override
    public ProjetResponseDTO addProjet(ProjetRequestDTO projetRequestDTO) {
        MesProjets projet = projetMapper.fromProjetRequestDTO(projetRequestDTO);
        projet = interProjetRepository.save(projet);
        return projetMapper.toProjetResponseDTO(projet);
    }

    /**
     * Met à jour un projet existant.
     *
     * @param projetResponseDTO Le DTO de réponse de projet.
     * @return Le DTO de requête de projet après la mise à jour.
     */

    @Override
    public ProjetRequestDTO updateProjet(ProjetResponseDTO projetResponseDTO) {
        MesProjets projet = projetMapper.fromProjetResponseDTO(projetResponseDTO);
        Optional<MesProjets> existingProjetOpt = interProjetRepository.findById(projet.getId());

        if (existingProjetOpt.isPresent()) {
            MesProjets existingProjet = existingProjetOpt.get();
            existingProjet.setTitle(projet.getTitle());
            existingProjet.setDescription(projet.getDescription());
            existingProjet.setUrl(projet.getUrl());
            existingProjet.setImage(projet.getImage());


            MesProjets updatedProjet  = interProjetRepository.save(existingProjet);
            return projetMapper.toProjetRequestDTO(updatedProjet );
        } else {
            throw new IllegalArgumentException("pas de message");
        }


    }

    /**
     * Supprime un projet par son identifiant.
     *
     * @param id L'identifiant du projet à supprimer.
     */
    @Override
    public void deleteProjet(Long id) {
        interProjetRepository.deleteById(id);
    }

    /**
     * Récupère un projet par son identifiant.
     *
     * @param id L'identifiant du projet à récupérer.
     * @return Le DTO de réponse de projet.
     */
    @Override
    public ProjetResponseDTO getProjet(Long id) throws IllegalArgumentException {
        Optional<MesProjets> projetOpt = interProjetRepository.findById(id);
        if (projetOpt.isPresent()) {
            return projetMapper.toProjetResponseDTO(projetOpt.get());
        } else {
            throw new IllegalArgumentException("Projet not found");
        }
    }

    /**
     * Récupère tous les projets.
     *
     * @return La liste des DTO de réponse de projet.
     */
    @Override
    public Page<ProjetResponseDTO> getAllProjets(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        return interProjetRepository.findAll(pageRequest)
                .map(projetMapper::toProjetResponseDTO);
    }
}
