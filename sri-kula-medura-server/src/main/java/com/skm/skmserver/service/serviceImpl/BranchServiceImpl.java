package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.BranchDTO;
import com.skm.skmserver.dto.UserBranchesDTO;
import com.skm.skmserver.entity.Branch;
import com.skm.skmserver.repo.BranchRepo;
import com.skm.skmserver.service.BranchService;
import com.skm.skmserver.service.MainService;
import com.skm.skmserver.util.MapAll;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class BranchServiceImpl implements BranchService, MainService<BranchDTO, Branch> {
    private final BranchRepo branchRepo;
    private final MapAll<Branch, BranchDTO> mapAll;
    private final Branch newBranch;

    @Override
    public List<BranchDTO> allBranches() {
        return mapAll.mapAllAttributesToDTO(branchRepo.findAll(), this);
    }

    public BranchDTO saveBranch(BranchDTO branchDTO){
        Branch branch = branchRepo.save(Branch.builder(newBranch)
                .name(branchDTO.getName())
                .prefix(branchDTO.getPrefix())
                .status(true)
                .build());
        return set(branch);
    }

    @Override
    public BranchDTO getBranch(int id) {
        Branch branch = branchRepo.findById(id);
        return set(branch);
    }

    @Override
    public BranchDTO updateBranch(BranchDTO branchDTO, int id) {
        Branch branch = branchRepo.findById(id);
        return set(branchRepo.save(Branch.builder(branch)
                .name(branchDTO.getName())
                .prefix(branchDTO.getPrefix())
                .build()));
    }

    @Override
    public boolean deleteBranch(int id) {
        if (branchRepo.findById(id) == null) {
            return false;
        }
        branchRepo.deleteById(id);
        return true;
    }

    @Override
    public BranchDTO set(Branch branch) {
        return BranchDTO.builder(branch).build();
    }
}
