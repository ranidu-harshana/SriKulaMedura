package com.skm.skmserver.repo;

import com.skm.skmserver.entity.DressSelection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DressSelectionRepository extends JpaRepository<DressSelection, Integer> {
}
