package com.skm.skmserver.service;

import com.skm.skmserver.dto.BooleanResponseDTO;
import com.skm.skmserver.dto.ItemDTO;

import java.util.List;

public interface ItemService {
    List<ItemDTO> allItems();
    ItemDTO saveItem(ItemDTO itemDTO);
    ItemDTO getItem (int id);
    ItemDTO updateItem(ItemDTO itemDTO, int id);
    boolean deleteItem(int id);
    List<ItemDTO> searchItemsByItemCodeOrItemName(String query, String type);

    BooleanResponseDTO checkItemExist(String query);
}
