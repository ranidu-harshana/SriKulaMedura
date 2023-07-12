package com.skm.skmserver.service;

import com.skm.skmserver.dto.ItemCategoryDTO;

import java.util.List;

public interface ItemCategoryService {
    List<ItemCategoryDTO> allItemCategories();
    ItemCategoryDTO saveItemCategory(ItemCategoryDTO itemCategoryDTO);
    ItemCategoryDTO getItemCategory (int id);
    ItemCategoryDTO updateItemCategory(ItemCategoryDTO itemCategoryDTO, int id);
    boolean deleteItemCategory(int id);
}
