package com.skm.skmserver.controller;

import com.skm.skmserver.dto.UserBranchesDTO;
import com.skm.skmserver.service.serviceImpl.UserBranchesServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "api/v1/userbranch")
@CrossOrigin
public class UserBranchesController {
    private final UserBranchesServiceImpl userBranchesService;

    @PostMapping("/attach")
    public String attachBranch (@RequestBody UserBranchesDTO userBranchesDTO) {
        return userBranchesService.attachBranch(userBranchesDTO);
    }
}
