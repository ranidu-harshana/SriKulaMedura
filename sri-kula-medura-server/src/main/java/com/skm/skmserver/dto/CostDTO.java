package com.skm.skmserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class CostDTO {
    private int id;
    private double transport;
    private double salary;
    private double cleaning;
    private double depreciation;
    private Date created_at;
    private Date updated_at;
    private int reservation_id;
}
