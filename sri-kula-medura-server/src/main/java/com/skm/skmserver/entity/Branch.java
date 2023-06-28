package com.skm.skmserver.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data

public class Branch {
    @Id
    private String id;

    private String name;

    private boolean status;

    private String prefix;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at", nullable = false, updatable = false)
    private Date created_at;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "updated_at")
    private Date updated_at;
}
