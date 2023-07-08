package com.skm.skmserver.controller;

import com.skm.skmserver.dto.ItemCategoryDTO;
import com.skm.skmserver.dto.ItemDTO;
import com.skm.skmserver.service.serviceImpl.ItemCategoryServiceImpl;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/v1/itemcategory")
public class ItemCategoryController {
    private final ItemCategoryServiceImpl itemCategoryService;

    public ItemCategoryController(ItemCategoryServiceImpl itemCategoryService) {
        this.itemCategoryService = itemCategoryService;
    }

    @GetMapping("/")
    public String index() {
        return "Item Category";
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
    public String show(@PathVariable int id) {
        return "Show Item Category :" + id;
    }

    @PutMapping("/{id}")
    public String update(@RequestBody ItemDTO itemDTO, @PathVariable int id) {
        return "Update Item Category :" + id;
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id) {
        return "Delete Item Category :" + id;
    }

    @GetMapping("/{id}/edit")
    public String edit(@PathVariable int id) {
        return "Edit Item Category :" + id;
    }
}
