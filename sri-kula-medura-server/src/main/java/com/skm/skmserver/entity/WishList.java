package com.skm.skmserver.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class WishList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, updatable = false, columnDefinition = "DATE DEFAULT CURRENT_TIMESTAMP")
    @CreationTimestamp
    private Date created_at;

    @ManyToOne
    private Item item;

    @ManyToOne
    private Customer customer;
}
