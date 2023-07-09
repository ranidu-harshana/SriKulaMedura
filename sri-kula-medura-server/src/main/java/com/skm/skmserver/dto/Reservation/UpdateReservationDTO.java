package com.skm.skmserver.dto.Reservation;

import com.skm.skmserver.dto.DressSelection.DressSelectionDTO;
import com.skm.skmserver.dto.Measurement.MeasurementDTO;
import com.skm.skmserver.dto.Note.NoteDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

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
