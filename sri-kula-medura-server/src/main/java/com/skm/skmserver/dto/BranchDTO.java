package com.skm.skmserver.dto;

import com.skm.skmserver.entity.Branch;
import com.skm.skmserver.entity.UserBranches;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(builderMethodName = "internalBuilder")
public class BranchDTO {
    private int id;
    private String name;
    private boolean status;
    private String prefix;
    private Date created_at;
    private Date updated_at;
    private List<UserBranchesDTO> user_branches;

    public static BranchDTOBuilder builder(Branch branch) {
        return internalBuilder()
                .id(branch.getId())
                .name(branch.getName())
                .status(branch.isStatus())
                .prefix(branch.getPrefix())
                .created_at(branch.getCreated_at())
                .updated_at(branch.getUpdated_at());
    }
}
