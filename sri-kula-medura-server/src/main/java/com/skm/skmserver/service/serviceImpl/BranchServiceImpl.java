package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.BranchDTO;
import com.skm.skmserver.entity.Branch;
import com.skm.skmserver.repo.BranchRepo;
import com.skm.skmserver.service.BranchService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class BranchServiceImpl implements BranchService {
    @Autowired
    private BranchRepo branchRepo;
    @Autowired
    private ModelMapper modelMapper;
    public BranchDTO saveBranch(BranchDTO branchDTO){
        branchRepo.save(modelMapper.map(branchDTO,Branch.class));
        return branchDTO;
    }
}
