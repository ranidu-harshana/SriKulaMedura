package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.ItemDTO;
import com.skm.skmserver.entity.Item;
import com.skm.skmserver.repo.ItemRepository;
import com.skm.skmserver.service.ItemService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class ItemServiceImpl implements ItemService {
    private final ItemRepository itemRepository;
    private final ModelMapper modelMapper;
    public ItemServiceImpl(ItemRepository iitemRepository, ModelMapper modelMapper){
        this.itemRepository = iitemRepository;
        this.modelMapper = modelMapper;
    }
    public ItemDTO saveItem(ItemDTO itemDTO){
        itemRepository.save(modelMapper.map(itemDTO, Item.class));
        return itemDTO;
    }
}
