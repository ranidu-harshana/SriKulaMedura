package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.Item.ItemDTO;
import com.skm.skmserver.dto.ItemCategory.ItemCategoryDTO;
import com.skm.skmserver.dto.ItemCategory.UpdateItemCategoryDTO;
import com.skm.skmserver.entity.ItemCategory;
import com.skm.skmserver.repo.ItemCategoryRepository;
import com.skm.skmserver.service.ItemCategoryService;
import com.skm.skmserver.util.MapAll;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ItemCategoryServiceImpl implements ItemCategoryService {
    private final ItemCategoryRepository itemCategoryRepository;
    private final ModelMapper modelMapper;
    private final MapAll<ItemCategory, ItemCategoryDTO> mapAll;

    public List<ItemCategoryDTO> allItemCategories() {
        return mapAll.mapAllEntities(itemCategoryRepository.findAll(), ItemCategoryDTO.class);
    }

    public ItemCategoryDTO saveItemCategory(ItemCategoryDTO itemCategoryDTO){
        itemCategoryRepository.save(modelMapper.map(itemCategoryDTO, ItemCategory.class));
        return itemCategoryDTO;
    }

    public ItemCategoryDTO getItemCategory (int id) {
        return modelMapper.map(itemCategoryRepository.findById(id), ItemCategoryDTO.class);
    }

    public ItemCategoryDTO updateItemCategory(UpdateItemCategoryDTO itemCategoryDTO, int id) {
        ItemCategory category = itemCategoryRepository.findById(id);
        category.setCategory_name(itemCategoryDTO.getCategory_name());
        return modelMapper.map(itemCategoryRepository.save(category), ItemCategoryDTO.class);
    }

    public boolean deleteItemCategory(int id) {
        if (itemCategoryRepository.findById(id) == null) {
            return false;
        }
        itemCategoryRepository.deleteById(id);
        return true;
    }
}
