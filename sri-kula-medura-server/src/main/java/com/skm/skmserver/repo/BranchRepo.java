package com.skm.skmserver.repo;

import com.skm.skmserver.entity.Branch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BranchRepo extends JpaRepository<Branch,Integer> {
    Branch findById(int id);
}
