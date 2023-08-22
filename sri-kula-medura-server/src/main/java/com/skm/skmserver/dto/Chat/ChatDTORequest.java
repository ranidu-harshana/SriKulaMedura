package com.skm.skmserver.dto.Chat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class ChatDTORequest {
    private String message;
    private String senderId;
    private String receiverId;
    private String time;
}
