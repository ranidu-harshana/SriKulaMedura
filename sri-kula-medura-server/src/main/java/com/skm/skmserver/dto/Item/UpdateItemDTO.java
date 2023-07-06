package com.skm.skmserver.dto.Item;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UpdateItemDTO {
    private String item_name;
    private String item_type;
    private String item_image_url;
    private boolean rented_status;
    private int item_category_id;
}
