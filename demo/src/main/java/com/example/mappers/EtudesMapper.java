package com.example.mappers;

import com.example.dao.EtudeRequestDTO;
import com.example.dao.EtudeResponseDTO;
import com.example.entity.MesEtudes;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EtudesMapper {
    private ModelMapper modelMapper = new ModelMapper();
    private List<MesEtudes> mesEtudesList = new ArrayList<>();

    /**
     * Convertit un EtudeResponseDTO en MesEtudes.
     */
    public MesEtudes fromEtudeResponseDTO(EtudeResponseDTO etudeResponseDTO) {
        return modelMapper.map(etudeResponseDTO, MesEtudes.class);
    }

    /**
     * Convertit un MesEtudes en EtudeResponseDTO.
     */
    public EtudeResponseDTO toEtudeResponseDTO(MesEtudes mesEtudes) {
        return modelMapper.map(mesEtudes, EtudeResponseDTO.class);
    }

    /**
     * Ajoute une étude à la liste des études.
     */
    public void addEtude(MesEtudes mesEtudes) {
        mesEtudesList.add(mesEtudes);
    }

    /**
     * Retourne une copie de la liste des études.
     */
    public List<MesEtudes> getMesEtudesList() {
        return new ArrayList<>(mesEtudesList);
    }

    /**
     * Convertit un EtudeRequestDTO en MesEtudes.
     */
    public MesEtudes fromEtudeRequestDTO(EtudeRequestDTO etudeRequestDTO) {
        return modelMapper.map(etudeRequestDTO, MesEtudes.class);
    }

    /**
     * Convertit un MesEtudes en EtudeRequestDTO.
     */
    public EtudeRequestDTO toEtudeRequestDTO(MesEtudes mesEtudes) {
        return modelMapper.map(mesEtudes, EtudeRequestDTO.class);
    }
}
