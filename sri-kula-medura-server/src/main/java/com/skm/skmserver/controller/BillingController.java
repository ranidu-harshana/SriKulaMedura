package com.skm.skmserver.controller;

import com.skm.skmserver.dto.BillingDTO;
import com.skm.skmserver.service.serviceImpl.BillingServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/billing")
@CrossOrigin
@RequiredArgsConstructor
public class BillingController {
    private final BillingServiceImpl billingService;

    @PostMapping("/")
    public BillingDTO store(@RequestBody BillingDTO billingDTO){
        return billingService.saveBilling(billingDTO);
    }

}
