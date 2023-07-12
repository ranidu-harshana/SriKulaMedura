package com.skm.skmserver.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "api/v1/userbranch")
@CrossOrigin
public class UserBranchesController {
    @PostMapping("/attach")
    public void attachBranch () {

    }
}
