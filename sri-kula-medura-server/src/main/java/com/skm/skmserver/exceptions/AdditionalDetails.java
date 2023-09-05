package com.skm.skmserver.exceptions;

import com.skm.skmserver.dto.ErrorData;
import lombok.Getter;

@Getter
public class AdditionalDetails extends RuntimeException {
    private ErrorData errorData;
    private String message;

    public AdditionalDetails(String message) {
        super(message);
        this.message = message;
    }

    public AdditionalDetails additionalDetails (String name, Object value) {
        errorData = ErrorData.builder()
                .message(getMessage())
                .name(name)
                .value(value)
                .build();
        return this;
    }
}
