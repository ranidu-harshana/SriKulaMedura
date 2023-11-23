package com.skm.skmserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PaymentDTO {
    private double amount_payable;
    private String bill_number;
    private String name;
    private String mobno;
    private String email;
    private String address;
    private String hash;
    private String merchant_id;
}
