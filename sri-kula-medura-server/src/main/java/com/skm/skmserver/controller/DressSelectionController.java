package com.skm.skmserver.controller;

import com.skm.skmserver.dto.CommonBooleanDTO;
import com.skm.skmserver.dto.DressSelection.DressSelectionDTO;
import com.skm.skmserver.dto.DressSelection.SelectingDressesDTO;
import com.skm.skmserver.service.serviceImpl.DressSelectionServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/dressselection")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DressSelectionController {
    private final DressSelectionServiceImpl dressSelectionService;

    @GetMapping("/")
    public List<DressSelectionDTO> index() {
        return null;
    }

    @PostMapping("/")
    public CommonBooleanDTO store(@RequestBody SelectingDressesDTO selectingDressesDTO) {
        return dressSelectionService.saveDressSelections(selectingDressesDTO);
    }

    @GetMapping("/create")
    public String create() {
        return "Create Item Category";
    }

    @GetMapping("/{id}")
    public DressSelectionDTO show(@PathVariable int id) {
        return null;
    }

    @PutMapping("/{id}")
    public DressSelectionDTO update(@RequestBody DressSelectionDTO dressSelectionDTO, @PathVariable int id) {
        return null;
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id) {
        return "Item delete failed";
    }

    @GetMapping("/{id}/edit")
    public String edit(@PathVariable int id) {
        return "Edit Item Category :" + id;
    }
}