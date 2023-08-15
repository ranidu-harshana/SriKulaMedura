package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.Chat.ChatDTORequest;
import com.skm.skmserver.dto.Chat.ChatDTOResponse;
import com.skm.skmserver.entity.Chat;
import com.skm.skmserver.repo.ChatRepository;
import com.skm.skmserver.repo.UserRepository;
import com.skm.skmserver.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ChatServiceImpl implements ChatService {
    private final ChatRepository chatRepository;
    private final UserRepository userRepository;

    public ChatDTOResponse saveChat(ChatDTORequest chatDTORequest) {
        Chat chat = chatRepository.save(Chat.builder()
                .senderId(Integer.parseInt(chatDTORequest.getSenderId()))
                .receiverId(Integer.parseInt(chatDTORequest.getReceiverId()))
                .message(chatDTORequest.getMessage())
                .build());

        return ChatDTOResponse.builder()
                .message(chat.getMessage())
                .senderName(userRepository.findById(chat.getSenderId()).getName())
                .senderId(chat.getSenderId())
                .receiverId(chat.getReceiverId())
                .build();
    }
}
