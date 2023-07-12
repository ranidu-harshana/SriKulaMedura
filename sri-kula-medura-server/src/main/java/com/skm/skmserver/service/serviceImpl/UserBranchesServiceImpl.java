package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.UserBranchesDTO;
import com.skm.skmserver.repo.UserBranchesRepository;
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

    @Override
    public String attachBranch(UserBranchesDTO userBranchesDTO) {
        return null;
    }

    @Override
    public String detachBranch(UserBranchesDTO userBranchesDTO) {
        return null;
    }
}
