package com.skm.skmserver.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Date;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ItemCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String category_name;

    @Column(nullable = false, updatable = false, columnDefinition = "DATE DEFAULT CURRENT_TIMESTAMP")
    @CreationTimestamp
    private Date created_at;

    @Column(nullable = false, columnDefinition = "DATE DEFAULT CURRENT_TIMESTAMP")
    @CreationTimestamp
    private Date updated_at;

    @OneToMany(mappedBy = "item_category")
    private List<Item> items;
}
