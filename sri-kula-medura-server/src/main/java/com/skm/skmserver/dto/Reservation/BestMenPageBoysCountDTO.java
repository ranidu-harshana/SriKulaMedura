package com.skm.skmserver.dto.Reservation;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class BestMenPageBoysCountDTO {
    private int reservation_id;
    private int no_of_bestmen;
    private int no_of_pageboys;
}
