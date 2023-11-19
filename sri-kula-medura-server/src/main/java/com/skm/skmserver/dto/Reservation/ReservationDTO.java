package com.skm.skmserver.dto.Reservation;

import com.skm.skmserver.dto.Customer.CustomerUserDTO;
import com.skm.skmserver.dto.DressSelection.DressSelectionDTO;
import com.skm.skmserver.dto.MeasurementDTO;
import com.skm.skmserver.dto.NoteDTO;
import com.skm.skmserver.entity.Reservation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(builderMethodName = "internalBuilder")
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
    private LocalDate before_postpone_date;
    private Date created_at;
    private Date updated_at;
    private String date;
    private int customer_id;
    private CustomerUserDTO customer;
    private int user_id;
    private int branch_id;
    private String branch_name;
    private double amount_payable;
    // TODO: rented date range should be added as a column
    private List<NoteDTO> notes;
    private List<MeasurementDTO> measurements;
    private List<DressSelectionDTO> dress_selections;

    public static ReservationDTOBuilder builder(Reservation reservation) {
        return internalBuilder()
                .id(reservation.getId())
                .bill_number(reservation.getBill_number())
                .function_date(reservation.getFunction_date())
                .function_place(reservation.getFunction_place())
                .no_of_bestmen(reservation.getNo_of_bestmen())
                .no_of_pageboys(reservation.getNo_of_pageboys())
                .dressing_place(reservation.getDressing_place())
                .goingaway_change_place(reservation.getGoingaway_change_place())
                .status(reservation.getStatus())
                .measurement_date(reservation.getMeasurement_date())
                .before_postpone_date(reservation.getBefore_postpone_date())
                .created_at(reservation.getCreated_at())
                .updated_at(reservation.getUpdated_at())
                .date(new SimpleDateFormat("EEEE, MMMM dd, YYYY").format(reservation.getCreated_at()))
                .customer_id(reservation.getCustomer().getId())
                .user_id(reservation.getUser().getId())
                .branch_id(reservation.getBranch().getId())
                .branch_name(reservation.getBranch().getName());
    }
}
