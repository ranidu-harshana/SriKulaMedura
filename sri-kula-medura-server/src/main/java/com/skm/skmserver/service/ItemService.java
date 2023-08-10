package com.skm.skmserver.service;

import com.skm.skmserver.dto.CommonBooleanDTO;
import com.skm.skmserver.dto.ItemDTO;

import java.util.List;

public interface ItemService {
    List<ItemDTO> allItems();
    ItemDTO saveItem(ItemDTO itemDTO);
    ItemDTO getItem (int id);
    ItemDTO updateItem(ItemDTO itemDTO, int id);
    boolean deleteItem(int id);
    List<ItemDTO> searchItemsByItemCodeOrItemName(String query, String type);

    CommonBooleanDTO checkItemExist(String query, String type);
}
