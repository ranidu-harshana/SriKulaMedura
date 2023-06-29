package com.skm.skmserver.entity;

import com.skm.skmserver.enums.Role;
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
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = true)
    private String address;

    @Column(nullable = true)
    private String mobile_no;

    @Column(nullable = true)
    private Date email_verified_at;

    private String password;

    @Column(nullable = false, updatable = false, columnDefinition = "DATE DEFAULT CURRENT_TIMESTAMP")
    @CreationTimestamp
    private Date created_at;

    @Column(nullable = false, columnDefinition = "DATE DEFAULT CURRENT_TIMESTAMP")
    @CreationTimestamp
    private Date updated_at;

    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToMany(mappedBy = "user")
    private List<Reservation> reservations;
}
