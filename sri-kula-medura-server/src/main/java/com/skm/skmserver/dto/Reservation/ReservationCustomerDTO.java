package com.skm.skmserver.dto.Reservation;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class ReservationCustomerDTO {
    private LocalDate function_date;
    private int user_id;
    private int branch_id;
    private String name;
    private String address;
    private String mobile_no1;
    private String mobile_no2;
}
