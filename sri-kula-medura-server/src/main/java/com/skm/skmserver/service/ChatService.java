package com.skm.skmserver.service;

import com.skm.skmserver.dto.Chat.ChatDTORequest;
import com.skm.skmserver.dto.Chat.ChatDTOResponse;

public interface ChatService {
    ChatDTOResponse saveChat(ChatDTORequest chatDTORequest);
}
