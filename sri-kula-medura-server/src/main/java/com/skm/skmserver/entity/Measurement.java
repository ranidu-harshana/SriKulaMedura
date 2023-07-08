package com.skm.skmserver.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Measurement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = true)
    private String shoulder;

    @Column(nullable = true)
    private String chest;

    @Column(nullable = true)
    private String weist;

    @Column(nullable = true)
    private String tlength;

    @Column(nullable = true)
    private String ssize;

    @Column(nullable = true)
    private String arm;

    @Column(nullable = true)
    private String jheight;

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date created_at;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @UpdateTimestamp
    private Date updated_at;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Reservation reservation;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Type type; // (GROOM, BRIDE, ...)
}
