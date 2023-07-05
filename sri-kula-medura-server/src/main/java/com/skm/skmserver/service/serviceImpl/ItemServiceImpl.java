package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.ItemDTO;
import com.skm.skmserver.entity.Item;
import com.skm.skmserver.repo.ItemCategoryRepository;
import com.skm.skmserver.repo.ItemRepository;
import com.skm.skmserver.service.ItemService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ItemServiceImpl implements ItemService {
    private final ItemRepository itemRepository;
    private final ItemCategoryRepository itemCategoryRepository;
    private final ModelMapper modelMapper;

    public ItemServiceImpl(ItemRepository itemRepository, ItemCategoryRepository itemCategoryRepository, ModelMapper modelMapper) {
        this.itemRepository = itemRepository;
        this.itemCategoryRepository = itemCategoryRepository;
        this.modelMapper = modelMapper;
    }

    public List<ItemDTO> allItems() {
        return itemRepository.findAll()
                .stream()
                .map(item -> modelMapper.map(item, ItemDTO.class)).toList();
    }

    public ItemDTO saveItem(ItemDTO itemDTO){
        itemDTO.setItem_category(itemCategoryRepository.findById(1));
        Item item = itemRepository.save(modelMapper.map(itemDTO, Item.class));
        return modelMapper.map(item, ItemDTO.class);
    }

    public ItemDTO getItem (int id) {
        return modelMapper.map(itemRepository.findById(id), ItemDTO.class);
    }

    public ItemDTO updateItem(ItemDTO itemDTO, int id) {
        // TODO need to implement
        return null;
    }
}
