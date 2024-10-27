package com.example.dao;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PresentationRequestDTO {
    private String nom;
    private String prenom;
    private String videoPresentation;
    private String experiences;
    private String mesRecomandation;

}
