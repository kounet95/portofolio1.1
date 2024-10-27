package com.example.repos;


import com.example.entity.MesEtudes;
import org.springframework.data.jpa.repository.JpaRepository;


public interface InterEtudes extends JpaRepository<MesEtudes, Long> {
}
