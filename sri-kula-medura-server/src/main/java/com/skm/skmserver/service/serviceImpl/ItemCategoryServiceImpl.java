package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.ItemCategoryDTO;
import com.skm.skmserver.entity.ItemCategory;
import com.skm.skmserver.repo.ItemCategoryRepository;
import com.skm.skmserver.service.ItemCategoryService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class ItemCategoryServiceImpl implements ItemCategoryService {

    private final ItemCategoryRepository itemCategoryRepository;

    private final ModelMapper modelMapper;

    public ItemCategoryServiceImpl(ItemCategoryRepository itemCategoryRepository,ModelMapper modelMapper){
        this.itemCategoryRepository=itemCategoryRepository;
        this.modelMapper=modelMapper;
    }

    public ItemCategoryDTO saveItemCategory(ItemCategoryDTO itemCategoryDTO) {
        ItemCategory itemCategory = modelMapper.map(itemCategoryDTO, ItemCategory.class);
        ItemCategory savedItemCategory = itemCategoryRepository.save(itemCategory);
        return modelMapper.map(savedItemCategory, ItemCategoryDTO.class);
    }
}
