package com.skm.skmserver.service;

import com.skm.skmserver.dto.ItemCategory.ItemCategoryDTO;
import com.skm.skmserver.dto.ItemCategory.UpdateItemCategoryDTO;

import java.util.List;

public interface ItemCategoryService {
    List<ItemCategoryDTO> allItemCategories();
    ItemCategoryDTO saveItemCategory(ItemCategoryDTO itemCategoryDTO);
    ItemCategoryDTO getItemCategory (int id);
    ItemCategoryDTO updateItemCategory(UpdateItemCategoryDTO itemCategoryDTO, int id);
    boolean deleteItemCategory(int id);
}
