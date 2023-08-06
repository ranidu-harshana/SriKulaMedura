package com.skm.skmserver.controller;

import com.skm.skmserver.dto.BooleanResponseDTO;
import com.skm.skmserver.dto.ItemDTO;
import com.skm.skmserver.entity.Item;
import com.skm.skmserver.repo.ItemRepository;
import com.skm.skmserver.service.serviceImpl.ItemServiceImpl;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/item")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ItemController {
    private final ItemServiceImpl itemService;

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

    @GetMapping("/search/{query}/{type}")
    public List<ItemDTO> searchItem (@PathVariable String query, @PathVariable String type) {
        return itemService.searchItemsByItemCodeOrItemName(query, type);
    }

    @GetMapping("/check/exist/{query}")
    public BooleanResponseDTO checkItemExist(@PathVariable String query) {
        return itemService.checkItemExist(query);
    }
}
