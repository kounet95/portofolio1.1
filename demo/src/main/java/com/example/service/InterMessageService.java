package com.example.service;

import com.example.dao.EtudeRequestDTO;
import com.example.dao.EtudeResponseDTO;
import com.example.dao.MessageRequest;
import com.example.dao.MessageResponse;

import java.util.List;

public interface InterMessageService {

    MessageResponse addMessage(MessageRequest messageRequest);
    MessageRequest updatMessage(MessageResponse messageResponse);
    void deleteMessage(Long id);
    MessageResponse getMessage(Long id);
    List<MessageResponse> getAllMessage();
}
