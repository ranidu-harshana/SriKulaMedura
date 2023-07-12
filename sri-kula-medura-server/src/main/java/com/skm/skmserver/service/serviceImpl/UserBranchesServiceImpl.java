package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.UserBranchesDTO;
import com.skm.skmserver.entity.UserBranches;
import com.skm.skmserver.repo.BranchRepo;
import com.skm.skmserver.repo.UserBranchesRepository;
import com.skm.skmserver.repo.UserRepository;
import com.skm.skmserver.service.UserBranchesService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class UserBranchesServiceImpl implements UserBranchesService {
    private final UserBranchesRepository userBranchesRepository;
    private final UserRepository userRepository;
    private final BranchRepo branchRepository;

    @Override
    public String attachBranch(UserBranchesDTO userBranchesDTO) {
        for(int id: userBranchesDTO.getBranch_ids()) {
            userBranchesRepository.save(UserBranches.builder()
                    .branch(branchRepository.findById(id))
                    .user(userRepository.findById(userBranchesDTO.getUser_id()))
                    .build());
        }
        return "Successfully attached";
    }

    @Override
    public String detachBranch(UserBranchesDTO userBranchesDTO) {
        return null;
    }
}
