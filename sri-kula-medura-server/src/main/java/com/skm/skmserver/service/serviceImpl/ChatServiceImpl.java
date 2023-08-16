package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.Chat.ChatDTORequest;
import com.skm.skmserver.dto.Chat.ChatDTOResponse;
import com.skm.skmserver.entity.Chat;
import com.skm.skmserver.repo.ChatRepository;
import com.skm.skmserver.repo.UserRepository;
import com.skm.skmserver.service.ChatService;
import com.skm.skmserver.service.MainService;
import com.skm.skmserver.util.MapAll;
import com.sun.tools.javac.Main;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ChatServiceImpl implements ChatService, MainService<ChatDTOResponse, Chat> {
    private final ChatRepository chatRepository;
    private final UserRepository userRepository;
    private final MapAll<Chat, ChatDTOResponse> mapAll;

    public ChatDTOResponse saveChat(ChatDTORequest chatDTORequest) {
        Chat chat = chatRepository.save(Chat.builder()
                .senderId(Integer.parseInt(chatDTORequest.getSenderId()))
                .receiverId(Integer.parseInt(chatDTORequest.getReceiverId()))
                .message(chatDTORequest.getMessage())
                .build());
        return set(chat);
    }

    @Override
    public List<ChatDTOResponse> getAllMessagesBySenderReceiver(int fid, int sid) {
        return mapAll.mapAllAttributesToDTO(chatRepository.findChatsBySenderAndReceiver(fid, sid), this);
    }

    @Override
    public ChatDTOResponse set(Chat chat) {
        return ChatDTOResponse.builder()
                .message(chat.getMessage())
                .senderName(userRepository.findById(chat.getSenderId()).getName())
                .senderId(chat.getSenderId())
                .receiverId(chat.getReceiverId())
                .build();
    }
}
