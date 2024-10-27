package com.example.repos;


import com.example.entity.MesProjets;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InterProjet extends JpaRepository<MesProjets, Long> {

}
