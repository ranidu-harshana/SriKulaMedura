package com.skm.skmserver.service;

import com.skm.skmserver.dto.Branch.BranchDTO;
import com.skm.skmserver.dto.Branch.UpdateBranchDTO;
import com.skm.skmserver.entity.Branch;

import java.util.List;

public interface BranchService {
    List<BranchDTO> allBranches();
    BranchDTO saveBranch(BranchDTO branchDTO);
    BranchDTO getBranch (int id);
    BranchDTO updateBranch(UpdateBranchDTO branchDTO, int id);
    boolean deleteBranch(int id);
    BranchDTO getBranchDTOWithValues(Branch branch);
}
