package com.example.service;

import com.example.dao.MessageRequest;
import com.example.dao.MessageResponse;
import com.example.entity.MesProjets;
import com.example.entity.Message;
import com.example.mappers.MessageMapper;
import com.example.repos.InterMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MessageServiceImpl implements InterMessageService {

    @Autowired
    private InterMessage interMessage;

    @Autowired
    private MessageMapper messageMapper;

    @Override
    public MessageResponse addMessage(MessageRequest messageRequest) {
        Message message = messageMapper.frommessageRequest(messageRequest);
        message = interMessage.save(message);
        return messageMapper.toMessageResponse(message);
    }

    @Override
    public MessageRequest updatMessage(MessageResponse messageResponse) {
        Message message = messageMapper.frommessageResponse(messageResponse);
        Optional<Message> existingMessageOptional = interMessage.findById(message.getId());

        if (existingMessageOptional.isPresent()) {
            Message existingMessage = existingMessageOptional.get();
            // Update the fields with the new values
            existingMessage.setNom(message.getNom());
            existingMessage.setNomEtreprise(message.getNomEtreprise());
            existingMessage.setEmail(message.getEmail());
            existingMessage.setMessage(message.getMessage());

            Message updatedMessage = interMessage.save(existingMessage);
            return messageMapper.toMessageRequest(updatedMessage);
        } else {
            throw new IllegalArgumentException("Message not found");
        }
    }

    @Override
    public void deleteMessage(Long id) {
        if (interMessage.existsById(id)) {
            interMessage.deleteById(id);
        } else {
            throw new IllegalArgumentException("Message not found");
        }
    }

    @Override
    public MessageResponse getMessage(Long id) {
        return interMessage.findById(id)
                .map(messageMapper::toMessageResponse)
                .orElseThrow(() -> new IllegalArgumentException("Message not found"));
    }

    @Override
    public List<MessageResponse> getAllMessage() {
        List<Message> messageList = interMessage.findAll();
        return messageList.stream()
                .map(messageMapper::toMessageResponse)
                .collect(Collectors.toList());
    }
}
