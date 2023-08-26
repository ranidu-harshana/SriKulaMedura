package com.skm.skmserver.dto;

import com.skm.skmserver.entity.Branch;
import com.skm.skmserver.entity.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class UserBranchesDTO {
    private int id;
    private Date created_at;
    private Date updated_at;
    private List<Integer> branch_ids;
    private int user_id;
}
