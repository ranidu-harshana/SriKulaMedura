package com.skm.skmserver.dto;

import com.skm.skmserver.entity.ItemCategory;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(builderMethodName = "internalBuilder")
public class ItemCategoryDTO {
    private int id;
    private String category_name;
    private Date created_at;
    private Date updated_at;
//    private List<ItemDTO> items;

    public static ItemCategoryDTOBuilder builder(ItemCategory itemCategory) {
        return internalBuilder()
                .id(itemCategory.getId())
                .category_name(itemCategory.getCategory_name())
                .created_at(itemCategory.getCreated_at())
                .updated_at(itemCategory.getUpdated_at());
//                .items(itemCategory.getItems().stream().map(itemService::set).toList())
    }
}
