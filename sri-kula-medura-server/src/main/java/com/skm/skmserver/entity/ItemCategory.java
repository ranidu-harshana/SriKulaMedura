package com.skm.skmserver.entity;

import com.skm.skmserver.dto.ItemCategoryDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder(builderMethodName = "internalBuilder")
public class ItemCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String category_name;

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date created_at;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @UpdateTimestamp
    private Date updated_at;

    @OneToMany(mappedBy = "item_category")
    private List<Item> items;

    public static ItemCategoryBuilder builder(ItemCategory itemCategory) {
        return internalBuilder()
                .id(itemCategory.getId())
                .category_name(itemCategory.getCategory_name())
                .created_at(itemCategory.getCreated_at())
                .updated_at(itemCategory.getUpdated_at());
//                .items(itemCategory.getItems().stream().map(itemService::set).toList())
    }
}
