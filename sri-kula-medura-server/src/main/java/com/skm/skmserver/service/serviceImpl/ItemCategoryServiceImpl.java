package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.ItemCategoryDTO;
import com.skm.skmserver.entity.ItemCategory;
import com.skm.skmserver.repo.ItemCategoryRepository;
import com.skm.skmserver.service.ItemCategoryService;
import com.skm.skmserver.service.MainService;
import com.skm.skmserver.util.MapAll;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ItemCategoryServiceImpl implements ItemCategoryService, MainService<ItemCategoryDTO, ItemCategory> {
    private final ItemCategoryRepository itemCategoryRepository;
    private final MapAll<ItemCategory, ItemCategoryDTO> mapAll;
    private final ItemCategory newItemCategory;

    public List<ItemCategoryDTO> allItemCategories() {
        return mapAll.mapAllAttributesToDTO(itemCategoryRepository.findAll(), this);
    }

    public ItemCategoryDTO saveItemCategory(ItemCategoryDTO itemCategoryDTO) {
        ItemCategory itemCategory = itemCategoryRepository.save(ItemCategory.builder(newItemCategory)
                .category_name(itemCategoryDTO.getCategory_name())
                .build());
        return set(itemCategory);
    }

    public ItemCategoryDTO getItemCategory (int id) {
        ItemCategory itemCategory = itemCategoryRepository.findById(id);
        return set(itemCategory);
    }

    public ItemCategoryDTO updateItemCategory(ItemCategoryDTO itemCategoryDTO, int id) {
        ItemCategory itemCategory = itemCategoryRepository.findById(id);
        return set(itemCategoryRepository.save(ItemCategory.builder(itemCategory)
                .category_name(itemCategoryDTO.getCategory_name())
                .build()));
    }

    public boolean deleteItemCategory(int id) {
        if (itemCategoryRepository.findById(id) == null) {
            return false;
        }
        itemCategoryRepository.deleteById(id);
        return true;
    }

    @Override
    public ItemCategoryDTO set(ItemCategory itemCategory) {
        return ItemCategoryDTO.builder(itemCategory).build();
    }
}
