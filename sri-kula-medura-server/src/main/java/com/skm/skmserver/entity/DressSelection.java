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
@AllArgsConstructor
@NoArgsConstructor
@Component
@Builder(builderMethodName = "internalBuilder")
public class DressSelection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, columnDefinition = "BOOLEAN DEFAULT true")
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Item item;

    public static DressSelectionBuilder builder(DressSelection dressSelection) {
        if (dressSelection == null) {
            return internalBuilder();
        }
        return internalBuilder()
                .id(dressSelection.getId())
                .status(dressSelection.isStatus())
                .created_at(dressSelection.getCreated_at())
                .updated_at(dressSelection.getUpdated_at())
                .reservation(dressSelection.getReservation())
                .item(dressSelection.getItem());
    }
}
