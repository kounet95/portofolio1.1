package com.example.mappers;
import com.example.dao.MessageRequest;
import com.example.dao.MessageResponse;

import com.example.entity.Message;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class MessageMapper {



        private final ModelMapper modelMapper = new ModelMapper();
        private final List<Message> messagesList = new ArrayList<>();

        /**
         * Convertit un CompetencesRequestDTO en Competences.
         */
        public Message frommessageRequest(MessageRequest messageRequest) {
            return modelMapper.map(messageRequest, Message.class);
        }

        /**
         * Convertit un CompetencesResponseDTO en Competences.
         */
        public Message frommessageResponse(MessageResponse  messageResponse) {
            return modelMapper.map(messageResponse, Message.class);
        }

        /**
         * Convertit un Competences en CompetencesRequestDTO.
         */
        public MessageRequest toMessageRequest(Message message) {
            return modelMapper.map(message,MessageRequest.class);
        }

        /**
         * Convertit un Competences en CompetencesResponseDTO.
         */
        public MessageResponse toMessageResponse(Message message) {
            return modelMapper.map(message, MessageResponse.class);
        }

        /**
         * Ajoute une compétence à la liste des compétences.
         */
        public void addCompetences(Message message) {
            messagesList.add(message);
        }

        /**
         * Retourne une copie de la liste des compétences.
         */
        public List<Message> getMessagesList() {
            return new ArrayList<>(messagesList);
        }
    }

