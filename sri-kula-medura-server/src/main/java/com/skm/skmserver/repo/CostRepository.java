package com.skm.skmserver.repo;

import com.skm.skmserver.entity.AdditionalPayment;
import com.skm.skmserver.entity.Cost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CostRepository extends JpaRepository<Cost ,Integer> {
    Cost findById(int id);
    List<Cost> findAllByReservationId(int reservationId);
}
