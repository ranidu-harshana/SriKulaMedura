package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.Branch.BranchDTO;
import com.skm.skmserver.entity.Branch;
import com.skm.skmserver.repo.BranchRepo;
import com.skm.skmserver.service.BranchService;
import com.skm.skmserver.service.MainService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class BranchServiceImpl implements BranchService, MainService<BranchDTO, Branch> {
    private final BranchRepo branchRepo;

    @Override
    public List<BranchDTO> allBranches() {
        return null;
    }

    public BranchDTO saveBranch(BranchDTO branchDTO){
        Branch branch = branchRepo.save(Branch.builder()
                .name(branchDTO.getName())
                .prefix(branchDTO.getPrefix())
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
        return null;
    }

    @Override
    public boolean deleteBranch(int id) {
        return false;
    }

    @Override
    public BranchDTO set(Branch branch) {
        return BranchDTO.builder()
                .id(branch.getId())
                .name(branch.getName())
                .prefix(branch.getPrefix())
                .created_at(branch.getCreated_at())
                .updated_at(branch.getUpdated_at())
                .build();
    }
}
