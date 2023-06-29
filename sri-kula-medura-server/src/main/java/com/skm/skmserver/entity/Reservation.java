package com.skm.skmserver.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Date;
import java.util.List;

@Entity
@Data
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, unique = true)
    private String bill_number;

    @Column(nullable = true)
    private Date function_date;

    @Column(nullable = true)
    private String function_place;

    @Column(nullable = true)
    private int no_of_bestmen;

    @Column(nullable = true)
    private int no_of_pageboys;

    @Column(nullable = true)
    private String dressing_place;

    @Column(nullable = true)
    private String goingaway_change_place;

    @Column(nullable = false, columnDefinition = "BOOLEAN DEFAULT true")
    private boolean status;

    @Column(nullable = true)
    private Date measurement_date;

    @Column(nullable = false, updatable = false, columnDefinition = "DATE DEFAULT CURRENT_TIMESTAMP")
    @CreationTimestamp
    private Date created_at;

    @Column(nullable = false, columnDefinition = "DATE DEFAULT CURRENT_TIMESTAMP")
    @CreationTimestamp
    private Date updated_at;

    @OneToMany(mappedBy = "reservation")
    private List<Note> notes;

    @OneToMany(mappedBy = "reservation")
    private List<Measurement> measurements;

    @OneToMany(mappedBy = "reservation")
    private List<DressSelection> dress_selections;
}
