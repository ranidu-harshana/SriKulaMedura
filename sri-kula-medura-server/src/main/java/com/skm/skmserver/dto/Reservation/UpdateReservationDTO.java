package com.skm.skmserver.dto.Reservation;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor
@Data
public class UpdateReservationDTO {
    private String function_place;
    private int no_of_bestmen;
    private int no_of_pageboys;
    private String dressing_place;
    private String goingaway_change_place;
    private LocalDate measurement_date;
    private int customer_id;
    private int user_id;
    // TODO: rented date range should be added as a column
}
