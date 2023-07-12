package com.skm.skmserver.dto.Reservation;
import com.skm.skmserver.dto.DressSelection.DressSelectionDTO;
import com.skm.skmserver.dto.Measurement.MeasurementDTO;
import com.skm.skmserver.dto.Note.NoteDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;
import java.time.LocalDate;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
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
    private int customer_id;
    private int user_id;
    // TODO: rented date range should be added as a column
    private List<NoteDTO> notes;
    private List<MeasurementDTO> measurements;
    private List<DressSelectionDTO> dress_selections;
}
