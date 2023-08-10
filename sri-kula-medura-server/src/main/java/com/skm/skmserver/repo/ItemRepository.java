package com.skm.skmserver.repo;

import com.skm.skmserver.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {
    Item findById(int id);

    @Query(value = "SELECT * FROM item WHERE (item_code LIKE CONCAT('%', :query, '%') OR item_name LIKE CONCAT('%', :query, '%')) AND item_type = :type", nativeQuery = true)
    List<Item> searchItemsByItemCodeOrItemName(@Param("query") String query, @Param("type") String type);

    @Query(value = "SELECT * FROM item WHERE item_code=:item_code AND item_name=:item_name", nativeQuery = true)
    Item findByItemCodeAndItemName(String item_code, String item_name);
}
