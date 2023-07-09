package com.skm.skmserver.repo;

import com.skm.skmserver.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,Integer> {
    Customer findById(int id);
}
