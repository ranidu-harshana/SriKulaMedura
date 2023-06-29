package com.skm.skmserver.service;

import com.skm.skmserver.dto.BranchDTO;
import com.skm.skmserver.entity.Branch;
import com.skm.skmserver.repo.BranchRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class BranchService {
    @Autowired
    private BranchRepository branchRepository;
    @Autowired
    private ModelMapper modelMapper;
    public BranchDTO saveBranch(BranchDTO branchDTO){
        branchRepository.save(modelMapper.map(branchDTO,Branch.class));
        return branchDTO;
    }
}
