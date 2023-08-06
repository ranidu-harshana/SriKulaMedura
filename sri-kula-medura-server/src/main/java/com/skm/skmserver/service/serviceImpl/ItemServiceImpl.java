package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.BooleanResponseDTO;
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

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static com.skm.skmserver.util.Helpers.separateItemCodeAndItemName;

@Service
@Transactional
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService, MainService<ItemDTO, Item> {
    private final ItemRepository itemRepository;
    private final ItemCategoryRepository itemCategoryRepository;
    private final MapAll<Item, ItemDTO> mapAll;
    private final Item newItem;

    public List<ItemDTO> allItems() {
        return mapAll.mapAllAttributesToDTO(itemRepository.findAll(), this);
    }

    public ItemDTO saveItem(ItemDTO itemDTO){
        Item item = itemRepository.save(Item.builder(newItem)
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
        return set(itemRepository.save(Item.builder(item)
                .item_name(itemDTO.getItem_name())
                .item_type(itemDTO.getItem_type())
                .item_image_url(itemDTO.getItem_image_url())
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
        return ItemDTO.builder(item).build();
    }

    public List<ItemDTO> searchItemsByItemCodeOrItemName(String query, String type) {
        return mapAll.mapAllAttributesToDTO(itemRepository.searchItemsByItemCodeOrItemName(query, type), this);
    }

    @Override
    public BooleanResponseDTO checkItemExist(String query) {
        if (query == null || query.equals("")) {
            return BooleanResponseDTO.builder().response(false).build();
        }
        String[] separatedTexts = separateItemCodeAndItemName(query);
        if (separatedTexts == null || separatedTexts.length < 2) {
            return BooleanResponseDTO.builder().response(false).build();
        }
        Optional<Item> item = itemRepository.findByItemCodeAndItemName(separatedTexts[0], separatedTexts[1]);
        return BooleanResponseDTO.builder().response(item.isPresent()).build();
    }
}
