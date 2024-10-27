package com.example.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.*;
import jakarta.persistence.Id;
@Getter
@Setter
@Builder
@Entity @NoArgsConstructor @AllArgsConstructor
public class MesEtudes {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private  String designation;
    private String address;
    private  String plusInfo;
    private String imagesPres;

}
