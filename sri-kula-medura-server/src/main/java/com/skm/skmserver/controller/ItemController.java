package com.skm.skmserver.controller;

import com.skm.skmserver.dto.ItemDTO;
import com.skm.skmserver.service.serviceImpl.ItemServiceImpl;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/v1/items")
public class ItemController {

    private ItemServiceImpl itemServiceImpl;
    @GetMapping("/")
    public String Index(){
        return "Items";
    }
    @PostMapping(value = "/")
    public ItemDTO store(@RequestBody ItemDTO itemDTO){
        return itemServiceImpl.saveItem(itemDTO);
    }
    @GetMapping(value = "/create")
    public String create(){
        return "created";
    }
    @GetMapping("/{id}")
    public String show(@PathVariable int id){
        return "Id : " +id;
    }
    @PutMapping(value = "/{id}")
    public String update(@RequestBody ItemDTO itemDTO ,@PathVariable int id){
        return "Update : " + id;
    }
    @DeleteMapping(value = "/{id}")
    public String delete(@PathVariable int id){
        return "Delete : " + id;
    }
    @GetMapping(value = "/{}id}/edit")
    public String edit(@PathVariable int id){
        return "Edit " ;
    }
}
