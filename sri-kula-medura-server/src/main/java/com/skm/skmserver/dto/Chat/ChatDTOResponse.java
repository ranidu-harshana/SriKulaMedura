package com.skm.skmserver.dto.Chat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class ChatDTOResponse {
    private String message;
    private int senderId;
    private String senderName;
    private int receiverId;
    private String time;
}
