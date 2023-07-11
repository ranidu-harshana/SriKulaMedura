package com.skm.skmserver.service;

import com.skm.skmserver.dto.ItemCategory.ItemCategoryDTO;
import com.skm.skmserver.entity.ItemCategory;

import java.util.List;

public interface ItemCategoryService {
    List<ItemCategoryDTO> allItemCategories();
    ItemCategoryDTO saveItemCategory(ItemCategoryDTO itemCategoryDTO);
    ItemCategoryDTO getItemCategory (int id);
    ItemCategoryDTO updateItemCategory(ItemCategoryDTO itemCategoryDTO, int id);
    boolean deleteItemCategory(int id);
    ItemCategoryDTO getItemCategoryDTOWithValues(ItemCategory itemCategory);
}
