package com.skm.skmserver.controller;
import com.skm.skmserver.dto.BranchDTO;
import com.skm.skmserver.entity.Branch;
import com.skm.skmserver.service.BranchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(value = "api/v1/branch")
@CrossOrigin
public class BranchController {
    @Autowired
    private BranchService branchService;

    @GetMapping("/")
    public List<BranchDTO> getBranches(){
        return branchService.getAllBranches();
    }
    @PostMapping("/save")
    public BranchDTO saveBranch(@RequestBody BranchDTO branchDTO){
        return branchService.saveBranch(branchDTO);
    }
    @PutMapping("/update")
    public BranchDTO updateBranch(@RequestBody BranchDTO branchDTO) {
        return branchService.updateBranch(branchDTO);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        branchService.deleteBranch(id);
        return ResponseEntity.noContent().build();
    }
}
