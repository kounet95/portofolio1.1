package com.example.dao;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EtudeRequestDTO {


    private  String designation;
    private String address;
    private  String plusInfo;
    private String imagesPres;
}
