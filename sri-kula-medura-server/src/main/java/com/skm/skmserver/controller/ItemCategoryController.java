package com.skm.skmserver.controller;

import com.skm.skmserver.dto.ItemCategoryDTO;
import com.skm.skmserver.service.serviceImpl.ItemCategoryServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/itemcategory")
public class ItemCategoryController {
    private final ItemCategoryServiceImpl itemCategoryService;

    public ItemCategoryController(ItemCategoryServiceImpl itemCategoryService) {
        this.itemCategoryService = itemCategoryService;
    }

    @GetMapping("/")
    public List<ItemCategoryDTO> index() {
        return itemCategoryService.allItemCategories();
    }

    @PostMapping("/")
    public ItemCategoryDTO store(@RequestBody ItemCategoryDTO itemCategoryDTO) {
        return itemCategoryService.saveItemCategory(itemCategoryDTO);
    }

    @GetMapping("/create")
    public String create() {
        return "Create Item Category";
    }

    @GetMapping("/{id}")
    public ItemCategoryDTO show(@PathVariable int id) {
        return itemCategoryService.getItemCategory(id);
    }

    @PutMapping("/{id}")
    public ItemCategoryDTO update(@RequestBody ItemCategoryDTO itemCategoryDTO, @PathVariable int id) {
        return itemCategoryService.updateItemCategory(itemCategoryDTO, id);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id) {
        if(itemCategoryService.deleteItemCategory(id)){
            return "Item deleted successfully";
        }
        return "Item delete failed";
    }

    @GetMapping("/{id}/edit")
    public String edit(@PathVariable int id) {
        return "Edit Item Category :" + id;
    }
}
