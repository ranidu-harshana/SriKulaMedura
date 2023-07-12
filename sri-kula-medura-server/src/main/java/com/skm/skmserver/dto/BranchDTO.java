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
public class BranchDTO {
    private int id;
    private String name;
    private boolean status;
    private String prefix;
    private Date created_at;
    private Date updated_at;
}
