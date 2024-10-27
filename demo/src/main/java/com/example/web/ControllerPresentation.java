package com.example.web;

import com.example.dao.PresentationRequestDTO;
import com.example.dao.PresentationResponseDTO;
import com.example.entity.Presentation;
import com.example.service.SevicePresentation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/portofolio")
public class ControllerPresentation {

    @Autowired
    private SevicePresentation sevicePresentation;

    @GetMapping("/presentations")
    public List<Presentation> listPresentations() {
        return sevicePresentation.getAllPresentations();
    }

    @PostMapping("/ajout")
    public PresentationResponseDTO addPresentation(@RequestBody PresentationRequestDTO presentationRequestDTO) {
        return sevicePresentation.addpresenatation(presentationRequestDTO);
    }

    @PutMapping("/miseajour")
    public PresentationRequestDTO updatePresentation(@RequestBody PresentationResponseDTO presentationResponseDTO) {
        return sevicePresentation.updatepresenatation(presentationResponseDTO);
    }

    @DeleteMapping("/supprimer/{id}")
    public void deletePresentation(@PathVariable Long id) {
        sevicePresentation.deletePresentation(id);
    }

    @GetMapping("/presentation/{id}")
    public PresentationResponseDTO getPresentation(@PathVariable Long id) {
        return sevicePresentation.getPresentation(id);
    }
}
