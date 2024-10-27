package com.example.web;

import com.example.dao.CompetencesRequestDTO;
import com.example.dao.CompetencesResponseDTO;
import com.example.entity.MesCompetences;
import com.example.repos.InterCompetences;
import com.example.service.ServiceServiceCompetences;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.PagedModel;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/portofolio/competences")
public class ControllerCompetences {

    @Autowired
    private ServiceServiceCompetences serviceCompetences;
    @Autowired
    private InterCompetences interCompetences;
@GetMapping("/comp")
    public List<MesCompetences> allCompetences(){
        return interCompetences.findAll();
    }
    @PostMapping("/add")
    public CompetencesResponseDTO addCompetence(@RequestBody CompetencesRequestDTO competencesRequestDTO) {
        return serviceCompetences.addCompetences(competencesRequestDTO);
    }

    @PutMapping("/update")
    public CompetencesRequestDTO updateCompetence(@RequestBody CompetencesResponseDTO competencesResponseDTO) {
        return serviceCompetences.updateCompetences(competencesResponseDTO);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteCompetence(@PathVariable Long id) {
        serviceCompetences.deleteCompetences(id);
    }

    @GetMapping("/{id}")
    public CompetencesResponseDTO getCompetence(@PathVariable Long id) {
        return serviceCompetences.getCompetences(id);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/all")
    public Map<String, Object> getAllCompetences(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "4") int size) {
        Page<CompetencesResponseDTO> competencesPage = serviceCompetences.getAllCompetences(page, size);

        // Création d'une réponse simplifiée
        Map<String, Object> response = new HashMap<>();
        response.put("competences", competencesPage.getContent());
        response.put("totalPages", competencesPage.getTotalPages());
        response.put("totalElements", competencesPage.getTotalElements());
        response.put("currentPage", competencesPage.getNumber());

        return response;
    }
}

