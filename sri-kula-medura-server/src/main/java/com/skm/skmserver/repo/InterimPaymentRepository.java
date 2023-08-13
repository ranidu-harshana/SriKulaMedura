package com.skm.skmserver.repo;

import com.skm.skmserver.entity.InterimPayment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterimPaymentRepository extends JpaRepository<InterimPayment ,Integer> {
    InterimPayment findById(int id);
}
