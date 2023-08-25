package com.skm.skmserver.dto.Email;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TransactionEmailDTO {
    private String recipient;
    private String subject;
    private String amount;
    private String paymentType;
}
