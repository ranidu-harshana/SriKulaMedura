package com.skm.skmserver.repo;

import com.skm.skmserver.entity.Cost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CostRepository extends JpaRepository<Cost ,Integer> {
    Cost findById(int id);
}
