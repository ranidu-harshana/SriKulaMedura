package com.skm.skmserver.dto;

import com.skm.skmserver.entity.Customer;
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
public class InterimPaymentDTO {
    private int id;
    private double interim_payment;
    private Date created_at;
    private Date updated_at;
    private int reservation_id;
    private int customer_id;
}
