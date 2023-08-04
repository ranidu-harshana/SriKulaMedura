package com.skm.skmserver.entity;
import com.skm.skmserver.dto.BranchDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(builderMethodName = "internalBuilder")
public class Branch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @Column(nullable = false, columnDefinition = "boolean default true")
    private boolean status;

    private String prefix;

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date created_at;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @UpdateTimestamp
    private Date updated_at;

    @OneToMany(mappedBy = "branch")
    private List<Reservation> reservations;

    @OneToMany(mappedBy = "branch")
    private List<UserBranches> user_branches;

    public static BranchBuilder builder(Branch branch) {
        return internalBuilder()
                .id(branch.getId())
                .name(branch.getName())
                .status(branch.isStatus())
                .prefix(branch.getPrefix())
                .created_at(branch.getCreated_at())
                .updated_at(branch.getUpdated_at());
    }
}
