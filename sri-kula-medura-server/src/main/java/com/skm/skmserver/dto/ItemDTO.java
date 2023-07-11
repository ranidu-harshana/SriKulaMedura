package com.skm.skmserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
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
}
