package com.skm.skmserver.service;

import com.skm.skmserver.dto.Chat.ChatDTORequest;
import com.skm.skmserver.dto.Chat.ChatDTOResponse;

import java.util.List;

public interface ChatService {
    ChatDTOResponse saveChat(ChatDTORequest chatDTORequest);
    List<ChatDTOResponse> getAllMessagesBySenderReceiver(int sender, int receiver);
}
