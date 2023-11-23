package com.skm.skmserver.dto;

import com.skm.skmserver.entity.Measurement;
import com.skm.skmserver.entity.Reservation;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(builderMethodName = "internalBuilder")
public class MeasurementDTO {
    private int id;
    private String shoulder;
    private String chest;
    private String weist;
    private String tlength;
    private String ssize;
    private String arm;
    private String jheight;
    private String head;
    private String other;
    private String type; // (GROOM, BRIDE, ...)
    private String name;
    private Date created_at;
    private Date updated_at;
    private int reservation_id;

    public static MeasurementDTOBuilder builder(Measurement measurement) {
        return internalBuilder()
                .id(measurement.getId())
                .shoulder(measurement.getShoulder())
                .chest(measurement.getChest())
                .weist(measurement.getWeist())
                .tlength(measurement.getTlength())
                .ssize(measurement.getSsize())
                .arm(measurement.getArm())
                .jheight(measurement.getJheight())
                .head(measurement.getHead())
                .other(measurement.getOther())
                .type(measurement.getType())
                .name(measurement.getName())
                .created_at(measurement.getCreated_at())
                .updated_at(measurement.getUpdated_at())
                .reservation_id(measurement.getReservation().getId());
    }
}
