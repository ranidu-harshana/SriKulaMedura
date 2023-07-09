package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.Item.ItemDTO;
import com.skm.skmserver.dto.Item.UpdateItemDTO;
import com.skm.skmserver.entity.Item;
import com.skm.skmserver.repo.ItemCategoryRepository;
import com.skm.skmserver.repo.ItemRepository;
import com.skm.skmserver.service.ItemService;
import com.skm.skmserver.util.MapAll;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ItemServiceImpl implements ItemService {
    private final ItemRepository itemRepository;
    private final ItemCategoryRepository itemCategoryRepository;
    private final ModelMapper modelMapper;
    private final MapAll<Item, ItemDTO> mapAll;

    public ItemServiceImpl(ItemRepository itemRepository, ItemCategoryRepository itemCategoryRepository, ModelMapper modelMapper, MapAll<Item, ItemDTO> mapAll) {
        this.itemRepository = itemRepository;
        this.itemCategoryRepository = itemCategoryRepository;
        this.modelMapper = modelMapper;
        this.mapAll = mapAll;
    }

    public List<ItemDTO> allItems() {
        return mapAll.mapAllEntities(itemRepository.findAll(), ItemDTO.class);
    }

    public ItemDTO saveItem(ItemDTO itemDTO){
        Item item = itemRepository.save(modelMapper.map(itemDTO, Item.class));
        item.setItem_category(itemCategoryRepository.findById(itemDTO.getItem_category_id()));
        ItemDTO dto = modelMapper.map(item, ItemDTO.class);
        dto.setItem_category_id(itemDTO.getItem_category_id());
        return dto;
    }

    public ItemDTO getItem (int id) {
        return modelMapper.map(itemRepository.findById(id), ItemDTO.class);
    }

    public ItemDTO updateItem(UpdateItemDTO itemDTO, int id) {
        Item item = itemRepository.findById(id);
        modelMapper.map(itemDTO, item);
        item.setItem_category(itemCategoryRepository.findById(itemDTO.getItem_category_id()));
        ItemDTO dto = modelMapper.map(itemRepository.save(item), ItemDTO.class);
        dto.setItem_category_id(itemDTO.getItem_category_id());
        return dto;
    }

    public boolean deleteItem(int id) {
        if (itemRepository.findById(id) == null) {
            return false;
        }
        itemRepository.deleteById(id);
        return true;
    }
}
