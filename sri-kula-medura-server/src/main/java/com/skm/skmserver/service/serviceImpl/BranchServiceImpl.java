package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.Branch.BranchDTO;
import com.skm.skmserver.entity.Branch;
import com.skm.skmserver.repo.BranchRepo;
import com.skm.skmserver.service.BranchService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class BranchServiceImpl implements BranchService {
    private final BranchRepo branchRepo;
    private final ModelMapper modelMapper;

    public BranchServiceImpl(BranchRepo branchRepo, ModelMapper modelMapper) {
        this.branchRepo = branchRepo;
        this.modelMapper = modelMapper;
    }

    public BranchDTO saveBranch(BranchDTO branchDTO){
        branchRepo.save(modelMapper.map(branchDTO,Branch.class));
        return branchDTO;
    }
}
