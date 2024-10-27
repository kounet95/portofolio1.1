package com.example.dao;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EtudeResponseDTO {

    @Id
    private Long Id;
    private  String designation;
    private String address;
    private  String plusInfo;
    private String imagesPres;
}
