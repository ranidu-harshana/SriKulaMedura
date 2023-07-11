package com.skm.skmserver.service;

import com.skm.skmserver.dto.ItemDTO;
import com.skm.skmserver.entity.Item;

import java.util.List;

public interface ItemService {
    List<ItemDTO> allItems();
    ItemDTO saveItem(ItemDTO itemDTO);
    ItemDTO getItem (int id);
    ItemDTO updateItem(ItemDTO itemDTO, int id);
    boolean deleteItem(int id);
    ItemDTO getItemDTOWithValues(Item item);
}
