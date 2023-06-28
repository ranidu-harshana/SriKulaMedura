package com.skm.skmserver.controller;

import com.skm.skmserver.entity.Item;
import com.skm.skmserver.repo.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/items")
public class ItemController {

    @GetMapping(value = "/")
    public String hi () {
        return "hi";
    }
}
