package com.skm.skmserver.controller;

import com.skm.skmserver.dto.UserBranchesDTO;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/v1/userbranch")
@CrossOrigin
public class UserBranchesController {
    @PostMapping("/attach")
    public UserBranchesDTO attachBranch (@RequestBody UserBranchesDTO userBranchesDTO) {
        return userBranchesDTO;
    }
}
