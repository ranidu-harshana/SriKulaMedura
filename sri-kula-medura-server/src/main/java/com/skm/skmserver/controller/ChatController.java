package com.skm.skmserver.controller;

import com.skm.skmserver.dto.Chat.ChatDTORequest;
import com.skm.skmserver.dto.Chat.ChatDTOResponse;
import com.skm.skmserver.service.serviceImpl.ChatServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping(value = "api/v1/chat")
public class ChatController {
    private final SimpMessagingTemplate simpMessagingTemplate;
    private final ChatServiceImpl chatService;

    @MessageMapping("/message")
    public ChatDTOResponse recMessage(@Payload ChatDTORequest chatDTORequest){
        ChatDTOResponse chatDTOResponse = chatService.saveChat(chatDTORequest);
        simpMessagingTemplate.convertAndSendToUser(chatDTORequest.getReceiverId(),"/private", chatDTOResponse);
        return chatDTOResponse;
    }


}
