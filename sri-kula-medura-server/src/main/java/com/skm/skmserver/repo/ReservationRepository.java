package com.skm.skmserver.repo;

import com.skm.skmserver.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
    Reservation findById(int id);

    @Query(value = "SELECT * FROM reservation WHERE function_date=:function_date", nativeQuery = true)
    List<Reservation> findAllByFunction_date(@Param("function_date") String date);
}
