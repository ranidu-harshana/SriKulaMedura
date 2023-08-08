package com.skm.skmserver.repo;

import com.skm.skmserver.entity.DressSelection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DressSelectionRepository extends JpaRepository<DressSelection, Integer> {
    @Query(value = "SELECT * FROM dress_selection WHERE reservation_id=:reservationId", nativeQuery = true)
    List<DressSelection> findAllByReservationId(@Param("reservationId") int reservationId);
}
