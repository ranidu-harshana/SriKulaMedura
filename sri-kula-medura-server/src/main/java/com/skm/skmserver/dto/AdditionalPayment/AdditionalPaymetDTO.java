package com.skm.skmserver.dto.AdditionalPayment;

import com.skm.skmserver.entity.Reservation;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class AdditionalPaymetDTO {
    private  int id;

    private double payment;

    private boolean status;

    private Date created_at;

    private Date updated_at;

//    private Reservation reservation;

}
