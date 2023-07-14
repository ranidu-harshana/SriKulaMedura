package com.skm.skmserver.repo;

import com.skm.skmserver.entity.AdditionalPayment;
import com.skm.skmserver.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdditionalPaymentRepository extends JpaRepository<AdditionalPayment,Integer> {
    AdditionalPaymentRepository findById(int id);

}
