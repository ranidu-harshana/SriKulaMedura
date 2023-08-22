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

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(builderMethodName = "internalBuilder")
@Component
public class InterimPayment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private double interim_payment;

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

    public static InterimPaymentBuilder builder(InterimPayment interimPayment) {
        if (interimPayment == null) {
            return internalBuilder();
        }
        return internalBuilder()
                .id(interimPayment.getId())
                .interim_payment(interimPayment.getInterim_payment())
                .created_at(interimPayment.getCreated_at())
                .updated_at(interimPayment.getUpdated_at())
                .reservation(interimPayment.getReservation());
    }
}
