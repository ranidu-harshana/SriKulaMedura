package com.skm.skmserver.dto;

import com.skm.skmserver.entity.Billing;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(builderMethodName = "internalBuilder")
public class BillingDTO {
    private int id;
    private double bill_amount;
    private double amount_payable;
    private double discount;
    private double advance;
    private Date created_at;
    private Date updated_at;
    private int reservation_id;

    public static BillingDTOBuilder builder(Billing billing) {
        return internalBuilder()
                .id(billing.getId())
                .bill_amount(billing.getBill_amount())
                .amount_payable(billing.getAmount_payable())
                .discount(billing.getAdvance())
                .advance(billing.getAdvance())
                .created_at(billing.getCreated_at())
                .updated_at(billing.getUpdated_at())
                .reservation_id(billing.getReservation().getId());
    }
}
