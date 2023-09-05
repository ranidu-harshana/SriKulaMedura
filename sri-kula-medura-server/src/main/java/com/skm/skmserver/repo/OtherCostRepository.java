package com.skm.skmserver.repo;

import com.skm.skmserver.entity.OtherCost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OtherCostRepository extends JpaRepository<OtherCost ,Integer> {
    OtherCost findById(int id);
}
