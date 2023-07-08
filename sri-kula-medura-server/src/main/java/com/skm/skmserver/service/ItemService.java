package com.skm.skmserver.service;

import com.skm.skmserver.dto.Item.ItemDTO;
import com.skm.skmserver.dto.Item.UpdateItemDTO;

import java.util.List;

public interface ItemService {
    List<ItemDTO> allItems();
    ItemDTO saveItem(ItemDTO itemDTO);
    ItemDTO getItem (int id);
    ItemDTO updateItem(UpdateItemDTO itemDTO, int id);
    boolean deleteItem(int id);
}
