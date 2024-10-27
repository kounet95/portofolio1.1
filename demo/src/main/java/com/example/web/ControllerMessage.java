package com.example.web;

import com.example.dao.MessageRequest;
import com.example.dao.MessageResponse;
import com.example.entity.Message;
import com.example.entity.Presentation;
import com.example.service.MessageServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/portofolio")
public class ControllerMessage {

    @Autowired
    private MessageServiceImpl messageService;


    @GetMapping("/messages")
    public List<MessageResponse> messageList() {
        return messageService.getAllMessage();
    }


    @PostMapping("/addMessage")
    public MessageResponse addMessage(@RequestBody MessageRequest messageRequest) {
        return messageService.addMessage(messageRequest);
    }

    @PutMapping("/modifmessage")
    public MessageRequest messageRequest(@RequestBody MessageResponse messageResponse) {
        return messageService.updatMessage(messageResponse);
    }

    @DeleteMapping("/suppmessage/{id}")
    public void deleteMessage(@PathVariable Long id) {
        messageService.deleteMessage(id);
    }

    @GetMapping("/message/{id}")
    public MessageResponse getMessage(@PathVariable Long id) {
        return messageService.getMessage(id);
    }

}
