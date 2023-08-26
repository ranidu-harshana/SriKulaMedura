package com.skm.skmserver.dto;

import com.skm.skmserver.entity.Cost;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(builderMethodName = "internalBuilder")
public class CostDTO {
    private int id;
    private double transport;
    private double salary;
    private double cleaning;
    private double depreciation;
    private Date created_at;
    private Date updated_at;
    private int reservation_id;

    public static CostDTOBuilder builder(Cost cost) {
        return internalBuilder()
                .id(cost.getId())
                .transport(cost.getTransport())
                .salary(cost.getSalary())
                .cleaning(cost.getCleaning())
                .depreciation(cost.getDepreciation())
                .created_at(cost.getCreated_at())
                .updated_at(cost.getUpdated_at())
                .reservation_id(cost.getReservation().getId());
    }
}
