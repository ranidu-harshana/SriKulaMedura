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
@Data
@Builder(builderMethodName = "internalBuilder")
@Component
public class Cost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = true)
    private double transport;

    @Column(nullable = false)
    private double salary;

    @Column(nullable = true)
    private double cleaning;

    @Column(nullable = true)
    private double depreciation;

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

    public static CostBuilder builder(Cost cost) {
        if (cost == null) {
            return internalBuilder();
        }
        return internalBuilder()
                .id(cost.getId())
                .transport(cost.getTransport())
                .salary(cost.getSalary())
                .cleaning(cost.getCleaning())
                .depreciation(cost.getDepreciation())
                .created_at(cost.getCreated_at())
                .updated_at(cost.getUpdated_at())
                .reservation(cost.getReservation());
    }
}
