package com.skm.skmserver.dto.DressSelection;

import com.skm.skmserver.dto.ItemDTO;
import com.skm.skmserver.entity.DressSelection;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(builderMethodName = "internalBuilder")
public class DressSelectionDTO {
    private int id;
    private boolean status;
    private Date created_at;
    private Date updated_at;
    private int reservation_id;
    private int item_id;
    private ItemDTO item;
    private String item_description;

    public static DressSelectionDTOBuilder builder(DressSelection dressSelection) {
        return internalBuilder()
                .id(dressSelection.getId())
                .status(dressSelection.isStatus())
                .created_at(dressSelection.getCreated_at())
                .updated_at(dressSelection.getUpdated_at())
                .reservation_id(dressSelection.getReservation().getId())
                .item_id(dressSelection.getItem().getId());
    }
}
