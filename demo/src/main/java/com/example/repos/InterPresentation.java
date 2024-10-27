package com.example.repos;


import com.example.entity.Presentation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InterPresentation  extends JpaRepository<Presentation, Long> {

}