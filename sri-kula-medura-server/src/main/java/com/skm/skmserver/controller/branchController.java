package com.skm.skmserver.controller;
import com.skm.skmserver.dto.BranchDTO;
import com.skm.skmserver.service.serviceImpl.BranchServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/v1/branch")
@CrossOrigin
public class BranchController {
    @Autowired
    private BranchServiceImpl branchServiceImpl;

    @GetMapping("/")
    public String index(){
        return "branch";
    }

    @PostMapping("/")
    public BranchDTO store(@RequestBody BranchDTO branchDTO){
        return branchServiceImpl.saveBranch(branchDTO);
    }

    @GetMapping("/create")
    public String create(){
        return "";
    }

    @GetMapping("/{branch}")
    public String show(@PathVariable int id){
        return "";
    }

    @PutMapping("/{branch}")
    public String update(@RequestBody Object object, @PathVariable int id){
        return "update";
    }

    @DeleteMapping("/{branch}")
    public String delete(@PathVariable int id){
        return "delete";
    }

    @GetMapping("/{branch}/edit")
    public String edit(@PathVariable int id){
        return "edit";
    }
}
