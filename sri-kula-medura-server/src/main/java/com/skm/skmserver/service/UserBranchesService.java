package com.skm.skmserver.service;

import com.skm.skmserver.dto.UserBranchesDTO;

import java.util.List;

public interface UserBranchesService {
    String attachBranch (UserBranchesDTO userBranchesDTO);
    String detachBranch (UserBranchesDTO userBranchesDTO);
}
