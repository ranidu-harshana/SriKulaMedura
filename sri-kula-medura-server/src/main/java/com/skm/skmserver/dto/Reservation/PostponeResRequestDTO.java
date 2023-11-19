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
public class PostponeResRequestDTO {
    private int reservationId;
    private LocalDate postponeDate;
}
