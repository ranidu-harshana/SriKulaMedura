package com.skm.skmserver.repo;

import com.skm.skmserver.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
    Reservation findById(int id);

    @Query(value = "SELECT * FROM reservation WHERE bill_number=:bill_number", nativeQuery = true)
    Optional<Reservation> findByBill_number(@Param("bill_number") String bill_number);

    @Query(value = "SELECT * FROM reservation WHERE function_date=:function_date", nativeQuery = true)
    List<Reservation> findAllByFunction_date(@Param("function_date") LocalDate date);

    @Query(value = "SELECT * FROM reservation WHERE function_date between :fromDate AND :toDate", nativeQuery = true)
    List<Reservation> findAllByFunction_dateBetween(
            @Param("fromDate") LocalDate fromDate, @Param("toDate") LocalDate toDate);
}
