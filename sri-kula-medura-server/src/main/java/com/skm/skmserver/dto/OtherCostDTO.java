package com.skm.skmserver.dto;

import com.skm.skmserver.entity.OtherCost;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(builderMethodName = "internalBuilder")
public class OtherCostDTO {
    private int id;
    private double other_cost;
    private String reason;
    private Date created_at;
    private Date updated_at;
    private int reservation_id;

    public static OtherCostDTOBuilder builder(OtherCost otherCost){
        return internalBuilder()
                .id(otherCost.getId())
                .other_cost(otherCost.getOther_cost())
                .reason(otherCost.getReason())
                .created_at(otherCost.getCreated_at())
                .updated_at(otherCost.getUpdated_at())
                .reservation_id(otherCost.getReservation().getId());

    }

}
