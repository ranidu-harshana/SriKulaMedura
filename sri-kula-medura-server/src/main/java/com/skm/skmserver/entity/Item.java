package com.skm.skmserver.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder(builderMethodName = "internalBuilder")
@Component
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String item_code;
    private String item_name;
    private String item_type;
    private String item_image_url;
    private double item_price;

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date created_at;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @UpdateTimestamp
    private Date updated_at;

    private boolean rented_status; // to check if rented or not

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private ItemCategory item_category;

    @OneToMany(mappedBy = "item")
    private List<DressSelection> dress_selections;

    @OneToMany(mappedBy = "item")
    private List<WishList> wishlist;

    public static ItemBuilder builder(Item item) {
        if (item == null) {
            return internalBuilder();
        }
        return internalBuilder()
                .id(item.getId())
                .item_code(item.getItem_code())
                .item_name(item.getItem_name())
                .item_type(item.getItem_type())
                .item_image_url(item.getItem_image_url())
                .item_price(item.getItem_price())
                .created_at(item.getCreated_at())
                .updated_at(item.getUpdated_at())
                .rented_status(item.isRented_status())
                .item_category(item.getItem_category());
    }
}
