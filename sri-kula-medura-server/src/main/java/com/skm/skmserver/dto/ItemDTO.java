package com.skm.skmserver.dto;

import com.skm.skmserver.entity.Item;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(builderMethodName = "internalBuilder")
public class ItemDTO {
    private int id;
    private String item_code;
    private String item_name;
    private String item_type;
    private String item_image_url;
    private Date created_at;
    private Date updated_at;
    private boolean rented_status;
    private int item_category_id;
    private String item_category_name;

    public static ItemDTOBuilder builder(Item item) {
        return internalBuilder()
                .id(item.getId())
                .item_code(item.getItem_code())
                .item_name(item.getItem_name())
                .item_type(item.getItem_type())
                .item_image_url(item.getItem_image_url())
                .created_at(item.getCreated_at())
                .updated_at(item.getUpdated_at())
                .rented_status(item.isRented_status())
                .item_category_id(item.getItem_category().getId())
                .item_category_name(item.getItem_category().getCategory_name());
    }
}
