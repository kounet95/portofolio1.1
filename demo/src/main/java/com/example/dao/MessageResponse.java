package com.example.dao;

import jakarta.persistence.Id;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MessageResponse {

    @Id
    private  long id;
    private String name ;
    private String entreprise;
    private String email;
    private String message;
}
