package com.skm.skmserver.controller;
import com.skm.skmserver.dto.BranchDTO;
import com.skm.skmserver.service.serviceImpl.BranchServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/branch")
@CrossOrigin
public class BranchController {
    private final BranchServiceImpl branchServiceImpl;

    public BranchController(BranchServiceImpl branchServiceImpl) {
        this.branchServiceImpl = branchServiceImpl;
    }

    @GetMapping("/")
    public List<BranchDTO> index(){
        return branchServiceImpl.allBranches();
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
    public BranchDTO show(@PathVariable int id){
        return branchServiceImpl.getBranch(id);
    }

    @PutMapping("/{id}")
    public BranchDTO update(@RequestBody BranchDTO branchDTO, @PathVariable int id){
        return branchServiceImpl.updateBranch(branchDTO, id);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id){
        if(branchServiceImpl.deleteBranch(id)){
            return "Branch deleted successfully";
        }
        return "Branch delete failed";
    }

    @GetMapping("/{id}/edit")
    public String edit(@PathVariable int id){
        return "edit";
    }
}
