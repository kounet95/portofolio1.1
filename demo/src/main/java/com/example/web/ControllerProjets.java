package com.example.web;

import com.example.dao.CompetencesResponseDTO;
import com.example.dao.ProjetRequestDTO;
import com.example.dao.ProjetResponseDTO;
import com.example.service.InterProjetServicesImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/portofolio")
public class ControllerProjets {

    @Autowired
    private InterProjetServicesImpl serviceProjet;

    /**
     * Ajoute un nouveau projet.
     * @param projetRequestDTO Le DTO de requête de projet.
     * @return Le DTO de réponse de projet après l'ajout.
     */
    @PostMapping("/add")
    public ProjetResponseDTO addProjet(@RequestBody ProjetRequestDTO projetRequestDTO) {
        return serviceProjet.addProjet(projetRequestDTO);
    }

    /**
     * Met à jour un projet existant.
     *
     * @param projetResponseDTO Le DTO de réponse de projet.
     * @return Le DTO de réponse de projet après la mise à jour.
     */
    @PutMapping("/modification")
    public ProjetRequestDTO updateProjet(@RequestBody ProjetResponseDTO projetResponseDTO) {
        return serviceProjet.updateProjet(projetResponseDTO);
    }

    /**
     * Supprime un projet par son identifiant.
     * @param id L'identifiant du projet à supprimer.
     */
    @DeleteMapping("/{id}")
    public void deleteProjet(@PathVariable Long id) {
        serviceProjet.deleteProjet(id);
    }

    /**
     * Récupère un projet par son identifiant.
     * @param id L'identifiant du projet à récupérer.
     * @return Le DTO de réponse de projet.
     */
    @GetMapping("/{id}")
    public ProjetResponseDTO getProjet(@PathVariable Long id) {
        return serviceProjet.getProjet(id);
    }

    /**
     * Récupère tous les projets.
     * @return La liste des DTO de réponse de projet.
     */
    @GetMapping("/All")
    public Map<String, Object> getAllProjets(


        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "4") int size) {
         Page<ProjetResponseDTO> projetsPage = (Page<ProjetResponseDTO>) serviceProjet.getAllProjets(page, size);


            Map<String, Object> response = new HashMap<>();
            response.put("competences", projetsPage.getContent());
            response.put("totalPages", projetsPage.getTotalPages());
            response.put("totalElements", projetsPage.getTotalElements());
            response.put("currentPage", projetsPage.getNumber());

            return response;
        }
    }
