package com.skm.skmserver.controller;

import com.skm.skmserver.dto.BillingDTO;
import com.skm.skmserver.service.serviceImpl.BillingServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/billing")
@CrossOrigin
@RequiredArgsConstructor
public class BillingController {
    private final BillingServiceImpl billingService;

    @GetMapping("/")
    public List<BillingDTO> index(){
        return billingService.allBillings();
    }

    @PostMapping("/")
    public BillingDTO store(@RequestBody BillingDTO billingDTO){
        return billingService.saveBilling(billingDTO);
    }

    @GetMapping("/create")
    public String create(){
        return "create";
    }

    @GetMapping("/{id}")
    public BillingDTO show(@PathVariable int id){
        return billingService.getBilling(id);
    }

    @PutMapping("/{id}")
    public BillingDTO update(@RequestBody BillingDTO billingDTO, @PathVariable int id){
        return billingService.updateBilling(billingDTO,id);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id){
        if(billingService.deleteBilling(id)){
            return "Billing deleted successfully!!!";
        }
        return "Billing delete failed. !";
    }

    @GetMapping("/{id}/edit")
    public String edit(@PathVariable int id){
        return "edit";
    }
}
