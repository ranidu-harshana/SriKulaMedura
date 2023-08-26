package com.skm.skmserver.repo;

import com.skm.skmserver.entity.Billing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BillingRepository extends JpaRepository<Billing,Integer> {
    Billing findById(int id);
}
