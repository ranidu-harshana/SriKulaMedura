package com.skm.skmserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class AdditionalPaymentDTO {
    private int id;
    private double payment;
    private String reason;
    private boolean status;
    private Date created_at;
    private Date updated_at;
    private int reservation_id;
}
