package com.skm.skmserver.dto.ItemCategory;

import com.skm.skmserver.dto.ItemDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ItemCategoryDTO {
    private int id;
    private String category_name;
    private Date created_at;
    private Date updated_at;
    private List<ItemDTO> items;
}
