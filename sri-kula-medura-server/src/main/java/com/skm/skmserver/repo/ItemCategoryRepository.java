package com.skm.skmserver.repo;

import com.skm.skmserver.entity.ItemCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemCategoryRepository extends JpaRepository<ItemCategory, Integer> {
    ItemCategory findById(int id);

}
