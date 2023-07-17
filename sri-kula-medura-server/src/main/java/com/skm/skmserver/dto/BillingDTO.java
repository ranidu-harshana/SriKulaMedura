package com.skm.skmserver.dto;

import com.skm.skmserver.entity.Reservation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class BillingDTO {
    private int id;
    private double total_bill;
    private double discount;
    private double advance;
    private Date created_at;
    private Date updated_at;
    private int reservation_id;
}
