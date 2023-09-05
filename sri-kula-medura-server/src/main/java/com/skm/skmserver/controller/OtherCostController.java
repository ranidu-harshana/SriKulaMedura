package com.skm.skmserver.controller;

import com.skm.skmserver.dto.AdditionalPaymentDTO;
import com.skm.skmserver.dto.OtherCostDTO;
import com.skm.skmserver.service.serviceImpl.OtherCostServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/other-cost")
@RequiredArgsConstructor
@CrossOrigin
public class OtherCostController {
    private final OtherCostServiceImpl otherCostService;

    @GetMapping("/")
    public List<OtherCostDTO> index() {
        return otherCostService.allOtherCosts();
    }

    @PostMapping("/")
    public OtherCostDTO store(@RequestBody OtherCostDTO otherCostDTO){
        return otherCostService.saveOtherCost(otherCostDTO);
    }

}
