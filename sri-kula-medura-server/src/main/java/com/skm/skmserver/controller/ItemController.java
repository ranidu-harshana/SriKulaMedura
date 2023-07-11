package com.skm.skmserver.controller;

import com.skm.skmserver.dto.ItemDTO;
import com.skm.skmserver.service.serviceImpl.ItemServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/item")
public class ItemController {
    private final ItemServiceImpl itemService;
    public ItemController(ItemServiceImpl itemService) {
        this.itemService = itemService;
    }

    @GetMapping("/")
    public List<ItemDTO> index(){
        return itemService.allItems();
    }

    @PostMapping("/")
    public ItemDTO store(@RequestBody ItemDTO itemDTO){
        return itemService.saveItem(itemDTO);
    }

    @GetMapping("/create")
    public String create(){
        return "";
    }

    @GetMapping("/{id}")
    public ItemDTO show(@PathVariable int id){
        return itemService.getItem(id);
    }

    @PutMapping("/{id}")
    public ItemDTO update(@RequestBody ItemDTO itemDTO, @PathVariable int id){
        return itemService.updateItem(itemDTO, id);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id){
        if(itemService.deleteItem(id)){
            return "Item deleted successfully";
        }
        return "Item delete failed";
    }

    @GetMapping("/{id}/edit")
    public String edit(@PathVariable int id){
        return "edit";
    }
}
