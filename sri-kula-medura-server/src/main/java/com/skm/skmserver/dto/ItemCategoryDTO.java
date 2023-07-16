package com.skm.skmserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class ItemCategoryDTO {
    private int id;
    private String category_name;
    private Date created_at;
    private Date updated_at;
//    private List<ItemDTO> items;
}
