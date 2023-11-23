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
@NoArgsConstructor
@AllArgsConstructor
@Builder(builderMethodName = "internalBuilder")
@Data
@Component
public class Billing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    // Sum of all dresses price
    @Column(nullable = false)
    private double bill_amount;

    @Column(nullable = false)
    private double amount_payable;

    @Column(nullable = true)
    private double discount;

    @Column(nullable = true)
    private double advance;

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date created_at;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @UpdateTimestamp
    private Date updated_at;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Reservation reservation;

    public static BillingBuilder builder(Billing billing) {
        if (billing == null) {
            return internalBuilder();
        }
        return internalBuilder()
                .id(billing.getId())
                .bill_amount(billing.getBill_amount())
                .amount_payable(billing.getAmount_payable())
                .discount(billing.getAdvance())
                .advance(billing.getAdvance())
                .created_at(billing.getCreated_at())
                .updated_at(billing.getUpdated_at())
                .reservation(billing.getReservation());
    }
}
