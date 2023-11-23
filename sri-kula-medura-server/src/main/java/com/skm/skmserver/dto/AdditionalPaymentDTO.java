package com.skm.skmserver.dto;

import com.skm.skmserver.entity.AdditionalPayment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(builderMethodName = "internalBuilder")
public class AdditionalPaymentDTO {
    private int id;
    private double payment;
    private String reason;
    private boolean status;
    private Date created_at;
    private Date updated_at;
    private int reservation_id;

    public static AdditionalPaymentDTOBuilder builder(AdditionalPayment additionalPayment) {
        return internalBuilder()
                .id(additionalPayment.getId())
                .payment(additionalPayment.getPayment())
                .reason(additionalPayment.getReason())
                .status(additionalPayment.isStatus())
                .created_at(additionalPayment.getCreated_at())
                .updated_at(additionalPayment.getUpdated_at())
                .reservation_id(additionalPayment.getReservation().getId());
    }
}
