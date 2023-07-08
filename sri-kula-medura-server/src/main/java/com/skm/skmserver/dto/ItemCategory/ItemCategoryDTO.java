package com.skm.skmserver.dto.ItemCategory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.sql.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ItemCategoryDTO {
    private int id;
    private String category_name;
    private Date created_at;
    private Date updated_at;
}
