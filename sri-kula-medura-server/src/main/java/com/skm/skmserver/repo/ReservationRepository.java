package com.skm.skmserver.repo;

import com.skm.skmserver.entity.ItemCategory;
import com.skm.skmserver.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
    Reservation findById(int id);
}
