package com.skm.skmserver.repo;

import com.skm.skmserver.entity.AdditionalPayment;
import com.skm.skmserver.service.serviceImpl.AdditionalPaymentServiceImpl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdditionalPaymentRepository extends JpaRepository<AdditionalPayment ,Integer> {

}
