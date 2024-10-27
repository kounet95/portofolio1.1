package com.example.repos;


import com.example.entity.MesCompetences;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterCompetences  extends JpaRepository<MesCompetences,Long> {
}
