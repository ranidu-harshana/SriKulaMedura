package com.skm.skmserver.dto.Branch;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class BranchDTO {
    private int id;
    private String name;
    private boolean status;
    private String prefix;
    private Date created_at;
    private Date updated_at;
}
