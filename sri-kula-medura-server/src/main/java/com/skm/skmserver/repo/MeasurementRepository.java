package com.skm.skmserver.repo;

import com.skm.skmserver.entity.Measurement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MeasurementRepository extends JpaRepository<Measurement, Integer> {
    Optional<Measurement> findByTypeAndReservationId(String type, int reservation_id);
}
