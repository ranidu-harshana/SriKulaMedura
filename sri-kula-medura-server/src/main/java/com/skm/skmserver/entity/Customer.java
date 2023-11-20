package com.skm.skmserver.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(builderMethodName = "internalBuilder")
@Component
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

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date created_at;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @UpdateTimestamp
    private Date updated_at;

    @OneToOne
    private User user;

    @OneToMany(mappedBy = "customer")
    private List<Reservation> reservations;

//    @OneToMany(mappedBy = "customer")
//    private List<WishList> wishlist;

    public static CustomerBuilder builder(Customer customer) {
        if (customer == null) {
            return internalBuilder();
        }
        return internalBuilder()
                .id(customer.getId())
                .mobile_no(customer.getMobile_no())
                .status(customer.isStatus())
                .discount(customer.getDiscount())
                .created_at(customer.getCreated_at())
                .updated_at(customer.getUpdated_at())
                .user(customer.getUser());
    }
}
