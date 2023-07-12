package com.skm.skmserver.service;

import com.skm.skmserver.dto.BranchDTO;

import java.util.List;

public interface BranchService {
    List<BranchDTO> allBranches();
    BranchDTO saveBranch(BranchDTO branchDTO);
    BranchDTO getBranch (int id);
    BranchDTO updateBranch(BranchDTO branchDTO, int id);
    boolean deleteBranch(int id);
}
