package com.skm.skmserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class ReservationDTO {
    private int id;
    private String bill_number;
    private LocalDate function_date;
    private String function_place;
    private int no_of_bestmen;
    private int no_of_pageboys;
    private String dressing_place;
    private String goingaway_change_place;
    private boolean status;
    private LocalDate measurement_date;
    private Date created_at;
    private Date updated_at;
    private String date;
    private int customer_id;
    private int user_id;
    private int branch_id;
    private String branch_name;
    // TODO: rented date range should be added as a column
    private List<NoteDTO> notes;
    private List<MeasurementDTO> measurements;
    private List<DressSelectionDTO> dress_selections;
}
