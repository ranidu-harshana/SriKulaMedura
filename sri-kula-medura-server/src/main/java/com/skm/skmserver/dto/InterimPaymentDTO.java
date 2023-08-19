package com.skm.skmserver.dto;

import com.skm.skmserver.entity.InterimPayment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(builderMethodName = "internalBuilder")
public class InterimPaymentDTO {
    private int id;
    private double interim_payment;
    private Date created_at;
    private Date updated_at;
    private int reservation_id;
    private int customer_id;

    public static InterimPaymentDTOBuilder builder(InterimPayment interimPayment){
        return internalBuilder()
                .id(interimPayment.getId())
                .interim_payment(interimPayment.getInterim_payment())
                .created_at(interimPayment.getCreated_at())
                .updated_at(interimPayment.getUpdated_at())
                .reservation_id(interimPayment.getReservation().getId())
                .customer_id(interimPayment.getCustomer().getId());
    }
}
