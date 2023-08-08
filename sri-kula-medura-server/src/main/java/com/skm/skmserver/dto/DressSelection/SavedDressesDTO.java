package com.skm.skmserver.dto.DressSelection;

import com.skm.skmserver.dto.ItemDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class SavedDressesDTO {
    private int id;
    private boolean status;
    private Date created_at;
    private Date updated_at;
    private ItemDTO item;
}
