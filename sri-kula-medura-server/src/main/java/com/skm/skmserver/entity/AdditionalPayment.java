package com.skm.skmserver.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(builderMethodName = "internalBuilder")
public class AdditionalPayment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private double payment;
    private String reason;

    @Column(nullable = false, columnDefinition = "boolean default true")
    private boolean status;

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

    public static AdditionalPaymentBuilder builder(AdditionalPayment additionalPayment) {
        return internalBuilder()
                .id(additionalPayment.getId())
                .payment(additionalPayment.getPayment())
                .reason(additionalPayment.getReason())
                .status(additionalPayment.isStatus())
                .created_at(additionalPayment.getCreated_at())
                .updated_at(additionalPayment.getUpdated_at())
                .reservation(additionalPayment.getReservation());
    }
}
