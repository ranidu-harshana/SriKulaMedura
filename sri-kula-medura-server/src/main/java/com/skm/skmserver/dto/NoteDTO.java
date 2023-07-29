package com.skm.skmserver.dto;

import com.skm.skmserver.entity.Reservation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
public class NoteDTO {
    private int id;
    private String note;
    private boolean status;
    private Date created_at;
    private Date updated_at;
    private Reservation reservation_id;
}
