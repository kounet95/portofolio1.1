package com.example.dao;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Getter
@Setter
@Builder

@AllArgsConstructor
@NoArgsConstructor
public class ProjetRequestDTO {

    private String title;
    private String description;
    private String url;
    private String image;
}
