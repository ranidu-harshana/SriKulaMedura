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
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder(builderMethodName = "internalBuilder")
@Component
public class OtherCost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private double other_cost;
    private String reason;

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

    public static OtherCostBuilder builder(OtherCost otherCost){
        if(otherCost == null)
            return internalBuilder();
        return internalBuilder()
                .id(otherCost.getId())
                .other_cost(otherCost.getOther_cost())
                .reason(otherCost.getReason())
                .created_at(otherCost.getCreated_at())
                .updated_at(otherCost.getUpdated_at())
                .reservation(otherCost.getReservation());
    }

}
