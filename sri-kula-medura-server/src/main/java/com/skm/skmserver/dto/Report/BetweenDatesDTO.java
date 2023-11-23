package com.skm.skmserver.dto.Report;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class BetweenDatesDTO {
    private LocalDate fromDate;
    private LocalDate toDate;
}
