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
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = true)
    private String mobile_no;

    @Column(nullable = false, columnDefinition = "BOOLEAN DEFAULT true")
    private boolean status;

    @Column(nullable = true)
    private int discount;

    @Column(nullable = false, updatable = false, columnDefinition = "DATE DEFAULT CURRENT_TIMESTAMP")
    @CreationTimestamp
    private Date created_at;

    @Column(nullable = false, columnDefinition = "DATE DEFAULT CURRENT_TIMESTAMP")
    @CreationTimestamp
    private Date updated_at;

    @OneToOne
    private User user;

    @OneToMany(mappedBy = "customer")
    private List<Reservation> reservations;

    @OneToMany(mappedBy = "customer")
    private List<WishList> wishlist;
}
