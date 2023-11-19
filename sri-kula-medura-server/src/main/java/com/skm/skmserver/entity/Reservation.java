package com.skm.skmserver.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(builderMethodName = "internalBuilder")
@Component
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, unique = true)
    private String bill_number;

    @Column()
    private LocalDate function_date;

    @Column()
    private String function_place;

    @Column(nullable = true, columnDefinition = "INT DEFAULT 0")
    private int no_of_bestmen;

    @Column(nullable = true, columnDefinition = "INT DEFAULT 0")
    private int no_of_pageboys;

    @Column(nullable = true)
    private String dressing_place;

    @Column(nullable = true)
    private String goingaway_change_place;

    @Column(nullable = false, columnDefinition = "BOOLEAN DEFAULT false")
    private Boolean status;

    @Column(nullable = true)
    private LocalDate measurement_date;

    private LocalDate before_postpone_date;

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date created_at;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @UpdateTimestamp
    private Date updated_at;

    @OneToMany(mappedBy = "reservation")
    private List<Note> notes;

    @OneToMany(mappedBy = "reservation")
    private List<Measurement> measurements;

    @OneToMany(mappedBy = "reservation")
    private List<Cost> costs;

    @OneToMany(mappedBy = "reservation")
    private List<OtherCost> otherCosts;

    @OneToMany(mappedBy = "reservation")
    private List<DressSelection> dress_selections;

    @OneToMany(mappedBy = "reservation")
    private List<AdditionalPayment> additionalPayments;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Customer customer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Branch branch;

    @OneToOne(mappedBy = "reservation")
    private Billing billing;

    public static ReservationBuilder builder(Reservation reservation) {
        if (reservation == null) {
            return internalBuilder();
        }
        return internalBuilder()
                .id(reservation.getId())
                .bill_number(reservation.getBill_number())
                .function_date(reservation.getFunction_date())
                .function_place(reservation.getFunction_place())
                .no_of_bestmen(reservation.getNo_of_bestmen())
                .no_of_pageboys(reservation.getNo_of_pageboys())
                .dressing_place(reservation.getDressing_place())
                .goingaway_change_place(reservation.getGoingaway_change_place())
                .status(reservation.getStatus())
                .measurement_date(reservation.getMeasurement_date())
                .before_postpone_date(reservation.getBefore_postpone_date())
                .created_at(reservation.getCreated_at())
                .updated_at(reservation.getUpdated_at())
                .user(reservation.getUser())
                .customer(reservation.getCustomer())
                .branch(reservation.getBranch())
                .billing(reservation.getBilling());
    }
}
