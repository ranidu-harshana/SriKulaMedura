package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.ItemDTO;
import com.skm.skmserver.entity.Item;
import com.skm.skmserver.repo.ItemCategoryRepository;
import com.skm.skmserver.repo.ItemRepository;
import com.skm.skmserver.service.ItemService;
import com.skm.skmserver.service.MainService;
import com.skm.skmserver.util.MapAll;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService, MainService<ItemDTO, Item> {
    private final ItemRepository itemRepository;
    private final ItemCategoryRepository itemCategoryRepository;
    private final MapAll<Item, ItemDTO> mapAll;

    public List<ItemDTO> allItems() {
        return mapAll.mapAllAttributesToDTO(itemRepository.findAll(), this);
    }

    public ItemDTO saveItem(ItemDTO itemDTO){
        Item item = itemRepository.save(Item.builder()
                .item_code(itemDTO.getItem_code())
                .item_name(itemDTO.getItem_name())
                .item_type(itemDTO.getItem_type())
                .item_image_url(itemDTO.getItem_image_url())
                .rented_status(false)
                .item_category(itemCategoryRepository.findById(itemDTO.getItem_category_id()))
                .build());
        return set(item);
    }

    public ItemDTO getItem (int id) {
        Item item = itemRepository.findById(id);
        return set(item);
    }

    public ItemDTO updateItem(ItemDTO itemDTO, int id) {
        Item item = itemRepository.findById(id);
        return set(itemRepository.save(Item.builder()
                .id(item.getId())
                .item_code(item.getItem_code())
                .item_name(itemDTO.getItem_name())
                .item_type(itemDTO.getItem_type())
                .item_image_url(itemDTO.getItem_image_url())
                .rented_status(item.isRented_status())
                .item_category(itemCategoryRepository.findById(itemDTO.getItem_category_id()))
                .build()));
    }

    public boolean deleteItem(int id) {
        if (itemRepository.findById(id) == null) {
            return false;
        }
        itemRepository.deleteById(id);
        return true;
    }

    @Override
    public ItemDTO set(Item item) {
        return ItemDTO.builder()
                .id(item.getId())
                .item_code(item.getItem_code())
                .item_name(item.getItem_name())
                .item_type(item.getItem_type())
                .item_image_url(item.getItem_image_url())
                .created_at(item.getCreated_at())
                .updated_at(item.getUpdated_at())
                .rented_status(item.isRented_status())
                .item_category_id(item.getItem_category().getId())
                .item_category_name(item.getItem_category().getCategory_name())
                .build();
    }
}
