package com.skm.skmserver.controller;
import com.skm.skmserver.dto.Branch.BranchDTO;
import com.skm.skmserver.service.serviceImpl.BranchServiceImpl;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/v1/branch")
@CrossOrigin
public class BranchController {
    private final BranchServiceImpl branchServiceImpl;

    public BranchController(BranchServiceImpl branchServiceImpl) {
        this.branchServiceImpl = branchServiceImpl;
    }

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

    @GetMapping("/{id}")
    public String show(@PathVariable int id){
        return "Id : "  + id;
    }

    @PutMapping("/{id}")
    public String update(@RequestBody BranchDTO branchDTO, @PathVariable int id){
        return "update: " + id;
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id){
        return "delete";
    }

    @GetMapping("/{id}/edit")
    public String edit(@PathVariable int id){
        return "edit";
    }
}
