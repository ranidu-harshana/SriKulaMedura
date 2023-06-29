package com.skm.skmserver.controller;
import com.skm.skmserver.dto.BranchDTO;
import com.skm.skmserver.service.BranchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/v1/branch")
@CrossOrigin
public class BranchController {
    @Autowired
    private BranchService branchService;

    @GetMapping("/get")
    public String getBranch(){
        return "branch";
    }
    @PostMapping("/save")
    public BranchDTO saveBranch(@RequestBody BranchDTO branchDTO){
        return branchService.saveBranch(branchDTO);
    }

    @PutMapping("/update")
    public String updateBranch(){
        return "update";
    }

    @DeleteMapping("/delete")
    public String deleteBranch(){
        return "delete";
    }
}
