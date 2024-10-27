package com.example.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class MesCompetences {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @NotNull(message = "Le champ 'languages' ne doit pas être vide")
    private String languages;

    @NotNull(message = "Le champ 'framework' ne doit pas être vide")
    private String framework;
    @NotNull(message = "Le champ 'videoPresentation' ne doit pas être vide")
    private String videoPresentation;
    @NotNull(message = "Le champ 'lienGit' ne doit pas être vide")
    private String lienGit;
    @NotNull(message = "Le champ 'description' ne doit pas être vide")
    private String description;
    @Temporal(TemporalType.DATE)
    @NotNull(message = "Le champ 'date' ne doit pas être vide")
    private Date date;
    @Min(value = 0, message = "Le niveau ne peut pas être inférieur à 0")
    private Integer level;


}
