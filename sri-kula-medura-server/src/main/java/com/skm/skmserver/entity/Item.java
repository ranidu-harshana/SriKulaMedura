package com.skm.skmserver.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Date;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String item_code;
    private String item_name;
    private String item_type;
    private String item_image_url;

    @Column(nullable = false, updatable = false, columnDefinition = "DATE DEFAULT CURRENT_TIMESTAMP")
    @CreationTimestamp
    private Date created_at;

    @Column(nullable = false, columnDefinition = "DATE DEFAULT CURRENT_TIMESTAMP")
    @CreationTimestamp
    private Date updated_at;

    @Column(nullable = false, columnDefinition = "BOOLEAN DEFAULT true")
    private boolean rented_status; // to check if rented or not

    @ManyToOne
    private ItemCategory item_category;

    @OneToMany(mappedBy = "item")
    private List<DressSelection> dress_selections;

    @OneToMany(mappedBy = "item")
    private List<WishList> wishlist;
}
