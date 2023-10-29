package com.skm.skmserver.repo;

import com.skm.skmserver.entity.Measurement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MeasurementRepository extends JpaRepository<Measurement, Integer> {
    Optional<Measurement> findByTypeAndReservationId(String type, int reservation_id);

    List<Measurement> findAllByReservationId(int reservation_id);
}
