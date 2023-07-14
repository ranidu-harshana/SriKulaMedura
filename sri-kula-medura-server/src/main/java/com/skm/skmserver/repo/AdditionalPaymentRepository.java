package com.skm.skmserver.repo;

import com.skm.skmserver.entity.AdditionalPayment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AdditionalPaymentRepository extends JpaRepository<AdditionalPayment,Integer> {
    AdditionalPayment findById(int id);

}
