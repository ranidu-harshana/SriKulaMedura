package com.skm.skmserver.service;

import com.skm.skmserver.dto.Branch.BranchDTO;
import com.skm.skmserver.dto.Branch.UpdateBranchDTO;
import com.skm.skmserver.dto.ItemCategory.ItemCategoryDTO;
import com.skm.skmserver.dto.ItemCategory.UpdateItemCategoryDTO;

import java.util.List;

public interface BranchService {
    List<BranchDTO> allBranches();
    BranchDTO saveBranch(BranchDTO branchDTO);
    BranchDTO getBranch (int id);
    BranchDTO updateItemCategory(UpdateBranchDTO branchDTO, int id);
    boolean deleteBranch(int id);
}
