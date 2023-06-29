package com.skm.skmserver.service;

import com.skm.skmserver.dto.BranchDTO;
import com.skm.skmserver.entity.Branch;
import com.skm.skmserver.repo.BranchRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

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
    public List<BranchDTO> getAllBranches(){
        List<Branch> branchList = branchRepository.findAll();
        return modelMapper.map(branchList,new TypeToken<List<BranchDTO>>(){}.getType());
    }
    public BranchDTO updateBranch(BranchDTO branchDTO) {
        Branch branch = modelMapper.map(branchDTO, Branch.class);
        branchRepository.save(branch);
        return branchDTO;
    }
    public void deleteBranch(Integer id) {
        if (branchRepository.existsById(id)) {
            branchRepository.deleteById(id);
        }
    }
}
